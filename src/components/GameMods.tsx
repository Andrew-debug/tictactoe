import { useContext } from "react";
import { TicTacToeContext } from "../App";
import { gameTypesDescription } from "../utils";
import { ITicTacToeContext } from "../types";
import Button from "./Button";

const GameMods = () => {
  const { mod, setmod, resetGame }: ITicTacToeContext =
    useContext(TicTacToeContext)!;
  return (
    <>
      <p
        style={{
          textAlign: "center",
          marginBottom: 5,
          fontWeight: 600,
        }}
      >
        Start game or select player
      </p>
      <div style={{ display: "flex" }}>
        <Button
          value={"multiplayer"}
          mod={mod}
          handleClick={() => {
            resetGame();
            setmod(gameTypesDescription["multiplayer"]);
          }}
        />
        <Button
          value={"cross"}
          mod={mod}
          handleClick={() => {
            resetGame();
            setmod(gameTypesDescription["cross"]);
          }}
        />
        <Button
          value={"nought"}
          mod={mod}
          handleClick={() => {
            resetGame();
            setmod(gameTypesDescription["nought"]);
          }}
        />
      </div>
    </>
  );
};

export default GameMods;
