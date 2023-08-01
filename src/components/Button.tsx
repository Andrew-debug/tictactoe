import { ButtonStyles } from "../styles";
import { IMod } from "../types";
import { gameTypesDescription } from "../utils";

interface ButtonProps {
  value: string;
  mod?: IMod;
  handleClick: () => void;
}

const Button = ({ value, mod, handleClick }: ButtonProps) => {
  return (
    <ButtonStyles
      $mod={mod}
      $gameTypesDescription={gameTypesDescription}
      $value={value}
      onClick={handleClick}
    >
      {value}
    </ButtonStyles>
  );
};

export default Button;
