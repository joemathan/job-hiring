import NetflixIcon from "../../assets/image/netflix.png";
import {
  applyNowButtonName,
  externalApplyButtonName,
  primaryButtonStyle,
  secondaryButtonStyle,
} from "../../constants";
import { IJobCardListProps } from "../../types";
import Button from "../Button/Button";
import CandidateGeneralDetails from "../CandidateGeneralDetails/CandidateGeneralDetails";
import CandidateOtherDetails from "../CandidateOtherDetails/CandidateOtherDetails";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

const JobCardList = ({
  isLoading,
  isError,
  isSuccess,
  jobsData,
  setIsCreateJobModalOpen,
  setSelectedOption,
  setIsEditClicked,
  reset,
  deleteJobMutate,
}: IJobCardListProps) => {
  return (
    <>
      <h1 className="text-black text-2xl font-bold my-4 text-center">
        Job Alerts
      </h1>
      {isLoading && <Loader />}
      {isError && (
        <p className="text-error text-sm">
          Something went wrong. Please try again later.
        </p>
      )}
      {isSuccess && jobsData.length === 0 && (
        <p className="text-placeholder text-sm text-center">
          No Data available. Please hit 'Create Jobs' to add a new Job.
        </p>
      )}
      <section className="flex py-[30px] px-[85px] gap-[83px] flex-wrap">
        {isSuccess &&
          jobsData.length > 0 &&
          jobsData.map((jobData) => (
            <Card key={jobData.id}>
              <section className="flex gap-x-2 items-start">
                <img
                  height={48}
                  width={48}
                  src={NetflixIcon}
                  alt="netflix"
                  loading="lazy"
                  className="rounded-[5px]"
                />
                <div className="flex flex-col gap-y-6 w-full">
                  <CandidateGeneralDetails
                    jobTitle={jobData.jobTitle}
                    companyName={jobData.companyName}
                    industry={jobData.industry}
                    location={jobData.location}
                    remoteType={jobData.remoteType}
                    jobData={jobData}
                    setIsCreateJobModalOpen={setIsCreateJobModalOpen}
                    setSelectedOption={setSelectedOption}
                    setIsEditClicked={setIsEditClicked}
                    reset={reset}
                    deleteJobMutate={deleteJobMutate}
                  />
                  <CandidateOtherDetails
                    experienceMinimum={jobData.experienceMinimum}
                    experienceMaximum={jobData.experienceMaximum}
                    salaryMinimum={jobData.salaryMinimum}
                    salaryMaximum={jobData.salaryMaximum}
                    totalEmployee={jobData.totalEmployee}
                  />
                  <section className="flex justify-start">
                    {jobData.quickApply && (
                      <Button
                        name={applyNowButtonName}
                        onClick={() => {}}
                        buttonStyle={primaryButtonStyle}
                      />
                    )}
                    {jobData.externalApply && (
                      <Button
                        name={externalApplyButtonName}
                        onClick={() => {}}
                        buttonStyle={secondaryButtonStyle}
                      />
                    )}
                  </section>
                </div>
              </section>
            </Card>
          ))}
      </section>
    </>
  );
};

export default JobCardList;
