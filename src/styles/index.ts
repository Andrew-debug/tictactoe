import { styled } from "styled-components";
import { IGameTypesDescription, IMod } from "../types";

export const AppWrapper = styled.div`
  width: 100%;
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
`;

export const DrawWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const DrawFigure = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 50%;
  width: 300px;
  height: 300px;
`;
export const TurnsWrap = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

interface ITurnHighlight {
  $currentTurn: string;
  $isX?: boolean;
  $isO?: boolean;
}

export const TurnHighlight = styled.div<ITurnHighlight>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  width: 300px;
  padding: 15px;
  border-radius: 6px;
  margin: 10px;
  border-bottom: ${({ $currentTurn, $isX, $isO }) => {
    if ($currentTurn === "x" && $isX) {
      return "1px solid #14bdac";
    } else if ($currentTurn === "o" && $isO) {
      return "1px solid #14bdac";
    }
  }};
`;
interface IButtonStyles {
  $mod?: IMod;
  $gameTypesDescription: IGameTypesDescription;
  $value: string;
}

export const ButtonStyles = styled.button<IButtonStyles>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: none;
  border-left: none;
  flex-basis: 33.33%;
  width: 33.33%;
  padding: 8px 0 10px;
  margin: 0 2px;
  font-size: 14px;
  text-transform: capitalize;
  cursor: pointer;
  border: ${({ $mod, $gameTypesDescription, $value }) =>
    $mod === $gameTypesDescription[$value as keyof IGameTypesDescription]
      ? "1px solid var(--green-dark)"
      : "none"};
  box-shadow: ${({ $mod, $gameTypesDescription, $value }) =>
    $mod === $gameTypesDescription[$value as keyof IGameTypesDescription] &&
    "0px 2px 1px var(--green-dark)"};
  background-color: ${({ $mod, $gameTypesDescription, $value }) =>
    $mod === $gameTypesDescription[$value as keyof IGameTypesDescription]
      ? "var(--green)"
      : "var(--gray)"};
  color: ${({ $mod, $gameTypesDescription, $value }) =>
    $mod === $gameTypesDescription[$value as keyof IGameTypesDescription]
      ? "var(--white-primary)"
      : "var(--button-active)"};
  font-weight: ${({ $mod, $gameTypesDescription, $value }) =>
    $mod === $gameTypesDescription[$value as keyof IGameTypesDescription]
      ? 500
      : 400};

  text-shadow: ${({ $mod, $gameTypesDescription, $value }) =>
    $mod === $gameTypesDescription[$value as keyof IGameTypesDescription]
      ? "0 1px 0 var(--green-dark, rgba(0, 0, 0, 0.2)),0 0.3rem 1.6rem rgba(0, 0, 0, 0.05)"
      : "none"};
`;

export const BoadrWrap = styled.div`
  min-width: 600px;
  min-height: 600px;
  position: relative;
`;
export const BoardFakeBorder = styled.div`
  position: absolute;
  border: 2px solid #282c34;
  pointer-events: none;
  width: 600px;
  height: 600px;
  top: 0;
  left: 50px;
`;
export const GameOverWrap = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  cursor: pointer;
`;
export const SquaresRowWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
