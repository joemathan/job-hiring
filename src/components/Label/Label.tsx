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
  showTitle = true,
}: ILabelProps) => {
  const isMandatoryIcon = isRequired
    ? `after:content-['*'] after:ml-0.5 after:text-error`
    : "";

  return (
    <label htmlFor={name} className="block w-full">
      {showTitle && (
        <span
          className={`${isMandatoryIcon} block text-labelFontSize font-labelFontFamily leading-labelLineHeight font-medium text-dark`}
        >
          {title}
        </span>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            className={`mt-1 px-3 py-2 rounded-[5px] border-solid border-labelBorderColor bg-cardBgColor border text-dark font-labelFontFamily text-labelFontSize focus:border-primaryColor focus:outline-none block w-full placeholder:text-placeholder ${
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
