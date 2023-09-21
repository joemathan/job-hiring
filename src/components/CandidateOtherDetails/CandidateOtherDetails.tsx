import { partTime } from "../../constants";
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
    <section className="flex flex-col gap-y-2">
      <p className="text-jobDetailColor text-base font-normal not-italic">
        {partTime}
      </p>
      {experienceMaximum && experienceMinimum && (
        <p className="text-jobDetailColor text-base font-normal not-italic">
          Experience ({experienceMinimum} - {experienceMaximum} years)
        </p>
      )}
      {salaryMinimum && salaryMaximum && (
        <p className="text-jobDetailColor text-base font-normal not-italic">
          INR (₹) {formatNumberWithCommas(salaryMinimum)} -
          {formatNumberWithCommas(salaryMaximum)} / Month
        </p>
      )}
      {totalEmployee && (
        <p className="text-jobDetailColor text-base font-normal not-italic">
          {totalEmployee} employees
        </p>
      )}
    </section>
  );
};

export default CandidateOtherDetails;
