import { GameOverWrap } from "../styles";
import Cross from "./Cross";
import Draw from "./Draw";
import Nought from "./Nought";

const GameOverScreen = ({ winner }: { winner: string }) => {
  return (
    <GameOverWrap>
      {
        {
          o: <Nought size={"medium"} />,
          x: <Cross size={"medium"} />,
          draw: <Draw />,
        }[winner]
      }
      <div style={{ fontSize: 20, padding: 30 }}>
        {{ o: "WINNER", x: "WINNER", draw: "DRAW" }[winner]}
      </div>
    </GameOverWrap>
  );
};

export default GameOverScreen;
