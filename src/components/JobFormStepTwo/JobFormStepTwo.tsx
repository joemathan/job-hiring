import {
  MaxPlaceholder,
  MinPlaceholder,
  applyTypeLabel,
  experienceLabel,
  externalApplyLabel,
  externalApplyOption,
  labelContainerStyle,
  labelInputStyle,
  labelTitleStyle,
  quickApplyLabel,
  quickApplyOption,
  radioButtonTitleStyle,
  salaryLabel,
  totalEmployeeLabel,
  totalEmployeePlaceholder,
} from "../../constants";
import { IJobFormStepTwoProps } from "../../types";
import { getFormValidationRules, isError } from "../../utils";
import { FormValidationErrors } from "../FormValidationErrors/FormValidationErrors";
import LabelWithInputField from "../Label/Label";
import LabelWithRadioButton from "../RadioButton/RadioButton";

const JobFormStepTwo = ({
  control,
  errors,
  selectedOption,
  handleOptionChange,
  isSaveClicked,
}: IJobFormStepTwoProps) => {
  return (
    <>
      <section className="flex w-full gap-x-6 items-end">
        <LabelWithInputField
          title={experienceLabel}
          isRequired={false}
          placeholder={MinPlaceholder}
          type="number"
          name="experienceMinimum"
          control={control}
          isError={isError(errors, "experienceMinimum")}
          rules={getFormValidationRules(false)}
          labelContainerStyle={labelContainerStyle}
          labelInputStyle={labelInputStyle}
          labelTitleStyle={labelTitleStyle}
        >
          <FormValidationErrors errors={errors} name="experienceMinimum" />
        </LabelWithInputField>
        <LabelWithInputField
          title=""
          showTitle={false}
          isRequired={false}
          placeholder={MaxPlaceholder}
          type="number"
          name="experienceMaximum"
          control={control}
          isError={isError(errors, "experienceMaximum")}
          rules={getFormValidationRules(false)}
          labelContainerStyle={labelContainerStyle}
          labelInputStyle={labelInputStyle}
          labelTitleStyle={labelTitleStyle}
        >
          <FormValidationErrors errors={errors} name="experienceMaximum" />
        </LabelWithInputField>
      </section>
      <section className="flex w-full gap-x-6 items-end">
        <LabelWithInputField
          title={salaryLabel}
          isRequired={false}
          placeholder={MinPlaceholder}
          type="number"
          name="salaryMinimum"
          control={control}
          isError={isError(errors, "salaryMinimum")}
          rules={getFormValidationRules(false)}
          labelContainerStyle={labelContainerStyle}
          labelInputStyle={labelInputStyle}
          labelTitleStyle={labelTitleStyle}
        >
          <FormValidationErrors errors={errors} name="salaryMinimum" />
        </LabelWithInputField>
        <LabelWithInputField
          title=""
          showTitle={false}
          isRequired={false}
          placeholder={MaxPlaceholder}
          type="number"
          name="salaryMaximum"
          control={control}
          isError={isError(errors, "salaryMaximum")}
          rules={getFormValidationRules(false)}
          labelContainerStyle={labelContainerStyle}
          labelInputStyle={labelInputStyle}
          labelTitleStyle={labelTitleStyle}
        >
          <FormValidationErrors errors={errors} name="salaryMaximum" />
        </LabelWithInputField>
      </section>
      <LabelWithInputField
        title={totalEmployeeLabel}
        isRequired={false}
        placeholder={totalEmployeePlaceholder}
        type="string"
        name="totalEmployee"
        control={control}
        isError={isError(errors, "totalEmployee")}
        rules={getFormValidationRules(false)}
        labelContainerStyle={labelContainerStyle}
        labelInputStyle={labelInputStyle}
        labelTitleStyle={labelTitleStyle}
      >
        <FormValidationErrors errors={errors} name="totalEmployee" />
      </LabelWithInputField>
      <LabelWithRadioButton
        title={applyTypeLabel}
        radioButtonTitleStyle={radioButtonTitleStyle}
      >
        <>
          <section className="flex gap-4 items-center justify-start">
            <div className="flex items-center">
              <input
                type="radio"
                id={quickApplyLabel}
                name={quickApplyLabel}
                value={quickApplyOption}
                checked={selectedOption === quickApplyOption}
                onChange={handleOptionChange}
                className="mr-1"
              />
              <label
                htmlFor={quickApplyLabel}
                className="cursor-pointer text-placeholder"
              >
                {quickApplyLabel}
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id={externalApplyLabel}
                name={externalApplyLabel}
                value={externalApplyOption}
                checked={selectedOption === externalApplyOption}
                onChange={handleOptionChange}
                className="mr-1"
              />
              <label
                htmlFor={externalApplyLabel}
                className="cursor-pointer text-placeholder"
              >
                {externalApplyLabel}
              </label>
            </div>
          </section>
          {!selectedOption && isSaveClicked && (
            <p className="text-error">
              Select any one of the apply type filter.
            </p>
          )}
        </>
      </LabelWithRadioButton>
    </>
  );
};

export default JobFormStepTwo;
