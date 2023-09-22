import { Controller } from "react-hook-form";
import { stepNumber } from "../../constants";
import { ILabelProps } from "../../types";

const LabelWithInputField = ({
  title,
  isRequired,
  placeholder,
  type,
  name,
  control,
  isError,
  rules,
  children,
  labelContainerStyle,
  labelTitleStyle,
  labelInputStyle,
  showTitle = true,
}: ILabelProps) => {
  const isMandatoryIcon = isRequired
    ? `after:content-['*'] after:ml-0.5 after:text-error`
    : "";

  return (
    <label htmlFor={name} className={labelContainerStyle}>
      {showTitle && (
        <span className={`${isMandatoryIcon} ${labelTitleStyle}`}>{title}</span>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            className={`${labelInputStyle} ${
              isError
                ? "border-error focus:border-error"
                : "border-labelBorderColor focus:border-primaryColor"
            }`}
            placeholder={placeholder}
            {...field}
            {...stepNumber}
          />
        )}
      />
      {children}
    </label>
  );
};

export default LabelWithInputField;
