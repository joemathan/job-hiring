import {
  candidateDetailsContentStyle,
  candidateOtherDetailsContainerStyle,
  partTime,
} from "../../constants";
import { ICandidateOtherDetailsProps } from "../../types";
import { formatNumberWithCommas } from "../../utils";

const CandidateOtherDetails = ({
  experienceMinimum,
  experienceMaximum,
  salaryMinimum,
  salaryMaximum,
  totalEmployee,
}: ICandidateOtherDetailsProps) => {
  return (
    <section className={candidateOtherDetailsContainerStyle}>
      <p className={candidateDetailsContentStyle}>{partTime}</p>
      {experienceMaximum && experienceMinimum && (
        <p className={candidateDetailsContentStyle}>
          Experience ({experienceMinimum} - {experienceMaximum} years)
        </p>
      )}
      {salaryMinimum && salaryMaximum && (
        <p className={candidateDetailsContentStyle}>
          INR (₹) {formatNumberWithCommas(salaryMinimum)} -
          {formatNumberWithCommas(salaryMaximum)} / Month
        </p>
      )}
      {totalEmployee && (
        <p className={candidateDetailsContentStyle}>
          {totalEmployee} employees
        </p>
      )}
    </section>
  );
};

export default CandidateOtherDetails;
