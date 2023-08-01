import { Square, SquaresRowWrap } from "../styles";
import { FieldType, IMod } from "../types";
import Cross from "./Cross";
import Nought from "./Nought";

interface SquaresProps {
  data: FieldType;
  winner: string | undefined;
  currentTurn: string;
  mod: IMod;
  doMove: (y: number, x: number) => void;
}

const Squares = ({ data, winner, currentTurn, mod, doMove }: SquaresProps) => {
  return (
    <>
      {data.map((row, rowIndex) => (
        <SquaresRowWrap key={rowIndex}>
          {row.map((value, index) => (
            <Square
              key={index}
              onClick={() => {
                if (
                  !(
                    winner ||
                    data[rowIndex][index] ||
                    mod[currentTurn as keyof IMod] === "computer"
                  )
                ) {
                  doMove(rowIndex, index);
                }
              }}
            >
              {
                {
                  x: <Cross size={"medium"} />,
                  o: <Nought size={"medium"} />,
                }[value!]
              }
            </Square>
          ))}
        </SquaresRowWrap>
      ))}
    </>
  );
};

export default Squares;
