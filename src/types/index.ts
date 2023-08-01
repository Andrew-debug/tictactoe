import { Dispatch, SetStateAction } from "react";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export type CurrentTurnType = "x" | "o";
export type WinnerType = "x" | "o" | "draw" | undefined;
export type FieldType = (string | undefined)[][];

export interface IMod {
  x: string;
  o: string;
}

export interface IGameTypesDescription {
  multiplayer: IMod;
  cross: IMod;
  nought: IMod;
}
export interface IScore {
  x: number;
  o: number;
}

export interface ITicTacToeContext {
  mod: IMod;
  setmod: (mod: IMod) => void;
  resetGame: () => void;
  computerTurnSignal: number;
  setcomputerTurnSignal: (v: number) => void;
  currentTurn: CurrentTurnType;
  setcurrentTurn: Dispatcher<CurrentTurnType>;
  winner: string | undefined;
  setwinner: Dispatcher<WinnerType>;
  data: FieldType;
  setData: (v: FieldType) => void;
}
