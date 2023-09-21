import { IButtonProps } from "../../types";

const Button = ({
  name,
  onClick,
  buttonStyle,
  disabled = false,
}: IButtonProps) => {
  return (
    <button className={buttonStyle} disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
