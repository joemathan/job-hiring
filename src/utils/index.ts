import { FieldErrors } from "react-hook-form";
import { ICreateJobFormData } from "../types";

export const isNotEmpty = (value: string) => {
  return (value || "")?.trim() !== ""; // Check if the value is not empty after trimming whitespace
};

export const isAlphaNumeric = (value: string) => /^[a-zA-Z0-9\s]*$/.test(value);

export const isNegative = (value: string) => {
  return parseInt(value, 10) < 0;
};

export const isDecimal = (value: string) => {
  const decimalPattern = /^[-+]?\d+\.\d+$/;
  return decimalPattern.test(value);
};

export const formatNumberWithCommas = (number: number) => {
  return parseInt(String(number || ""), 10).toLocaleString("en-IN"); // 'en-IN' represents the Indian English locale
};

export const isError = (
  errors: FieldErrors<ICreateJobFormData>,
  name: string
) => {
  return ["required", "isNotEmpty", "isAlphaNumeric"].includes(
    (errors[name]?.type || "") as string
  );
};

export const saniziteJobData = (data: ICreateJobFormData) => {
  data.location = !!data.location ? data.location : "";
  data.remoteType = !!data.remoteType ? data.remoteType : "";
  data.experienceMinimum = !!data.experienceMinimum
    ? data.experienceMinimum
    : 0;
  data.experienceMaximum = !!data.experienceMaximum
    ? data.experienceMaximum
    : 0;
  data.salaryMinimum = !!data.salaryMinimum ? data.salaryMinimum : 0;
  data.salaryMaximum = !!data.salaryMaximum ? data.salaryMaximum : 0;
  data.totalEmployee = !!data.totalEmployee ? data.totalEmployee : "";
  return data;
};

export const getFormValidationRules = (isRequired: boolean) => {
  const rules = { required: false, validate: {} };
  if (isRequired) {
    rules.required = true;
    rules.validate = {
      isNotEmpty,
      isAlphaNumeric,
    };
  }
  if (!isRequired) {
    rules.required = false;
  }
  return rules;
};

export const areGivenValuesNotEmpty = (obj: ICreateJobFormData) => {
  const requiredProperties = ["jobTitle", "companyName", "industry"];

  for (const key of requiredProperties) {
    const value = obj[key];
    if (
      value === undefined ||
      value === null ||
      (value as string).trim() === ""
    ) {
      return false;
    }
  }
  return true;
};
