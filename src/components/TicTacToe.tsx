import _ from "lodash";
import { useState, useEffect, useContext } from "react";
import { CurrentTurnType, IMod, ITicTacToeContext } from "../types";
import { gameTypesDescription, turn_transitions } from "../utils";
import { TicTacToeContext } from "../App";
import Board from "./Board";
import Button from "./Button";
import Turns from "./Turns";

const TicTacToe = () => {
  const {
    mod,
    resetGame,
    computerTurnSignal,
    setcomputerTurnSignal,
    currentTurn,
    setcurrentTurn,
    winner,
    setwinner,
    data,
    setData,
  }: ITicTacToeContext = useContext(TicTacToeContext)!;
  const [score, setscore] = useState({ x: 0, o: 0 });

  // if computer moves first
  useEffect(() => {
    if (computerTurnSignal === 0 && mod === gameTypesDescription["nought"]) {
      setcomputerTurnSignal(1);
    }
  }, [computerTurnSignal, mod]);

  function updateScore() {
    if (currentTurn === "x") {
      setscore({
        ...score,
        x: score.x + 1,
      });
    } else if (currentTurn === "o") {
      setscore({
        ...score,
        o: score.o + 1,
      });
    }
  }
  function checkIsGameEnd() {
    // draw
    if (winner || data.every((row) => row.every((val) => val !== undefined))) {
      setwinner("draw");
    }
    // diagonaly wins
    const diagonalWins = [
      [data[0][0], data[1][1], data[2][2]],
      [data[0][2], data[1][1], data[2][0]],
    ];
    for (const i in diagonalWins) {
      if (
        diagonalWins[i].every((val) => val === "x") ||
        diagonalWins[i].every((val) => val === "o")
      ) {
        setwinner(currentTurn);
        updateScore();
      }
    }

    // row wins
    for (const i in data) {
      if (
        data[i].every((val) => val === "x") ||
        data[i].every((val) => val === "o")
      ) {
        setwinner(currentTurn);
        updateScore();
      }
    }
    // horizontal wins
    for (const i in data) {
      if (
        data.every((val) => val[i] === "x") ||
        data.every((val) => val[i] === "o")
      ) {
        setwinner(currentTurn);
        updateScore();
      }
    }
  }
  function doMove(y: number, x: number) {
    if (!winner) {
      data[y][x] = currentTurn;
      setData([...data]);
      checkIsGameEnd();
      if (mod[turn_transitions[currentTurn] as keyof IMod] === "computer") {
        setcomputerTurnSignal(computerTurnSignal + 1);
      }
      setcurrentTurn(turn_transitions[currentTurn] as CurrentTurnType);
    }
  }
  // computer turn
  useEffect(() => {
    if (computerTurnSignal !== 0) {
      setTimeout(() => {
        const possibleMoves = [];
        for (const row in data) {
          for (const item in data[row]) {
            if (data[row][item] === undefined) {
              possibleMoves.push([row, item]);
            }
          }
        }
        // doMove(..._.sample(possibleMoves));
        if (possibleMoves.length > 0) {
          const randomMove = _.sample(possibleMoves);
          if (randomMove) {
            const [row, item] = randomMove;
            doMove(+row, +item);
          }
        }
      }, 500);
    }
  }, [computerTurnSignal]);

  return (
    <>
      <Turns currentTurn={currentTurn} score={score} />
      <Board
        currentTurn={currentTurn}
        data={data}
        mod={mod}
        winner={winner}
        doMove={doMove}
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Button value={"restart game"} handleClick={resetGame} />
      </div>
    </>
  );
};

export default TicTacToe;
