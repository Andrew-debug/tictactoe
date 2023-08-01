import { BoadrWrap, BoardFakeBorder } from "../styles";
import { FieldType, IMod } from "../types";
import GameOverScreen from "./GameOverScreen";
import Squares from "./Squares";

interface BoardProps {
  currentTurn: string;
  data: FieldType;
  mod: IMod;
  winner: string | undefined;
  doMove: (y: number, x: number) => void;
}

const Board = ({ currentTurn, data, mod, winner, doMove }: BoardProps) => {
  return (
    <BoadrWrap>
      <BoardFakeBorder />
      {winner ? (
        <GameOverScreen winner={winner} />
      ) : (
        <Squares
          data={data}
          winner={winner}
          currentTurn={currentTurn}
          mod={mod}
          doMove={doMove}
        />
      )}
    </BoadrWrap>
  );
};

export default Board;
