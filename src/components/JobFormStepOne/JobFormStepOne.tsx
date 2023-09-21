import {
  companyNameLabel,
  companyNamePlaceholder,
  industryLabel,
  industryPlaceholder,
  jobTitleLabel,
  jobTitlePlaceholder,
  locationLabel,
  locationPlaceholder,
  remoteTypeLabel,
  remoteTypePlaceholder,
} from "../../constants";
import { IJobFormStepOneProps } from "../../types";
import { getFormValidationRules, isError } from "../../utils";
import { FormValidationErrors } from "../FormValidationErrors/FormValidationErrors";
import LabelWithInputField from "../Label/Label";

const JobFormStepOne = ({ control, errors }: IJobFormStepOneProps) => {
  return (
    <>
      <LabelWithInputField
        title={jobTitleLabel}
        isRequired
        placeholder={jobTitlePlaceholder}
        type="text"
        name="jobTitle"
        control={control}
        isError={isError(errors, "jobTitle")}
        rules={getFormValidationRules(true)}
      >
        <FormValidationErrors errors={errors} name="JobTitle" />
      </LabelWithInputField>
      <LabelWithInputField
        title={companyNameLabel}
        isRequired
        placeholder={companyNamePlaceholder}
        type="text"
        name="companyName"
        control={control}
        isError={isError(errors, "companyName")}
        rules={getFormValidationRules(true)}
      >
        <FormValidationErrors errors={errors} name="companyName" />
      </LabelWithInputField>
      <LabelWithInputField
        title={industryLabel}
        isRequired
        placeholder={industryPlaceholder}
        type="text"
        name="industry"
        control={control}
        isError={isError(errors, "industry")}
        rules={getFormValidationRules(true)}
      >
        <FormValidationErrors errors={errors} name="industry" />
      </LabelWithInputField>
      <section className="flex w-full gap-x-6">
        <LabelWithInputField
          title={locationLabel}
          isRequired={false}
          placeholder={locationPlaceholder}
          type="text"
          name="location"
          control={control}
          isError={isError(errors, "location")}
          rules={getFormValidationRules(false)}
        >
          <FormValidationErrors errors={errors} name="location" />
        </LabelWithInputField>
        <LabelWithInputField
          title={remoteTypeLabel}
          isRequired={false}
          placeholder={remoteTypePlaceholder}
          type="text"
          name="remoteType"
          control={control}
          isError={isError(errors, "remoteType")}
          rules={getFormValidationRules(false)}
        >
          <FormValidationErrors errors={errors} name="remoteType" />
        </LabelWithInputField>
      </section>
    </>
  );
};

export default JobFormStepOne;
