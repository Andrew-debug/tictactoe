import { TurnHighlight, TurnsWrap } from "../styles";
import { IScore } from "../types";
import Cross from "./Cross";
import Nought from "./Nought";

interface TurnsProps {
  currentTurn: string;
  score: IScore;
}

const Turns = ({ currentTurn, score }: TurnsProps) => {
  return (
    <TurnsWrap>
      <TurnHighlight $isX $currentTurn={currentTurn}>
        <Cross size={"small"} />
        <div>{score.x}</div>
      </TurnHighlight>
      <TurnHighlight $isO $currentTurn={currentTurn}>
        <Nought size={"small"} />
        <div>{score.o}</div>
      </TurnHighlight>
    </TurnsWrap>
  );
};

export default Turns;
