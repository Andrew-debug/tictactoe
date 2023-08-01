import { useState, createContext } from "react";
import {
  CurrentTurnType,
  FieldType,
  IMod,
  ITicTacToeContext,
  WinnerType,
} from "./types";
import { gameTypesDescription } from "./utils";
import { AppWrapper } from "./styles";
import GameMods from "./components/GameMods";
import TicTacToe from "./components/TicTacToe";

export const TicTacToeContext = createContext<ITicTacToeContext | null>(null);

function App() {
  const emptyField: FieldType = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ];

  const [mod, setmod] = useState<IMod>(gameTypesDescription["multiplayer"]); //multiplayer, cross, nought
  const [data, setData] = useState<FieldType>(emptyField);
  const [winner, setwinner] = useState<WinnerType>(undefined);
  const [computerTurnSignal, setcomputerTurnSignal] = useState(0);
  const [currentTurn, setcurrentTurn] = useState<CurrentTurnType>("x");

  function resetGame() {
    setData(emptyField);
    setwinner(undefined);
    setcurrentTurn("x");
    setcomputerTurnSignal(0);
  }
  return (
    <AppWrapper>
      <TicTacToeContext.Provider
        value={{
          mod,
          setmod,
          computerTurnSignal,
          setcomputerTurnSignal,
          currentTurn,
          setcurrentTurn,
          winner,
          setwinner,
          data,
          setData,
          resetGame,
        }}
      >
        <GameMods />
        <TicTacToe />
      </TicTacToeContext.Provider>
    </AppWrapper>
  );
}

export default App;
