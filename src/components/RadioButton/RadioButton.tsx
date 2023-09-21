import { IRadioButtonProps } from "../../types";

const LabelWithRadioButton = ({ title, children }: IRadioButtonProps) => {
  return (
    <label className="block w-full">
      <span className="after:content-['*'] after:ml-0.5 after:text-error block text-labelFontSize font-labelFontFamily leading-labelLineHeight font-medium text-dark">
        {title}
      </span>
      {children}
    </label>
  );
};

export default LabelWithRadioButton;
