import { DrawFigure, DrawWrap } from "../styles";
import Cross from "./Cross";
import Nought from "./Nought";

const Draw = () => {
  return (
    <DrawWrap>
      <DrawFigure
        style={{
          alignItems: "end",
        }}
      >
        <Cross size={"medium"} />
      </DrawFigure>
      <DrawFigure
        style={{
          alignItems: "start",
        }}
      >
        <Nought size={"belowMedium"} />
      </DrawFigure>
    </DrawWrap>
  );
};

export default Draw;
