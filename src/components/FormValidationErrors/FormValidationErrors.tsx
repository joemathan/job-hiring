import { FieldErrors } from "react-hook-form";
import { ICreateJobFormData } from "../../types";

export const FormValidationErrors = ({
  errors,
  name,
}: {
  errors: FieldErrors<ICreateJobFormData>;
  name: string;
}) => {
  return (
    <>
      {errors[name]?.type === "required" && (
        <p className="text-error">This field is required.</p>
      )}
      {errors[name]?.type === "isNotEmpty" && (
        <p className="text-error">This field cannot be empty.</p>
      )}
      {errors[name]?.type === "isAlphaNumeric" && (
        <p className="text-error">Special characters are not allowed.</p>
      )}
    </>
  );
};
