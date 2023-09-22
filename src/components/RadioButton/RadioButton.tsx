import { radioButtonContainerStyle } from "../../constants";
import { IRadioButtonProps } from "../../types";

const LabelWithRadioButton = ({
  title,
  children,
  radioButtonTitleStyle,
}: IRadioButtonProps) => {
  return (
    <label className={radioButtonContainerStyle}>
      <span className={radioButtonTitleStyle}>{title}</span>
      {children}
    </label>
  );
};

export default LabelWithRadioButton;
