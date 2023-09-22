import NetflixIcon from "../../assets/image/netflix.png";
import {
  applyNowButtonName,
  applyOrQuickApplyContainerStyle,
  candiateDetailsContainerStyle,
  cardSecondaryContainerStyle,
  cardStyle,
  companyStyle,
  externalApplyButtonName,
  iconStyle,
  jobAlertsTitle,
  jobAlertsTitleStyle,
  jobListCardContainerStyle,
  jobTitleStyle,
  locationStyle,
  noDataAvailable,
  noDataAvailableStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
  serverError,
  serverErrorStyle,
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
      <h1 className={jobAlertsTitleStyle}>{jobAlertsTitle}</h1>
      {isLoading && <Loader />}
      {isError && <p className={serverErrorStyle}>{serverError}</p>}
      {isSuccess && jobsData.length === 0 && (
        <p className={noDataAvailableStyle}>{noDataAvailable}</p>
      )}
      <section className={jobListCardContainerStyle}>
        {isSuccess &&
          jobsData.length > 0 &&
          jobsData.map((jobData) => (
            <Card key={jobData.id} cardStyle={cardStyle}>
              <section className={cardSecondaryContainerStyle}>
                <img
                  height={48}
                  width={48}
                  src={NetflixIcon}
                  alt="netflix"
                  loading="lazy"
                  className="rounded-[5px]"
                />
                <div className={candiateDetailsContainerStyle}>
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
                    jobTitleStyle={jobTitleStyle}
                    iconStyle={iconStyle}
                    companyStyle={companyStyle}
                    locationStyle={locationStyle}
                  />
                  <CandidateOtherDetails
                    experienceMinimum={jobData.experienceMinimum}
                    experienceMaximum={jobData.experienceMaximum}
                    salaryMinimum={jobData.salaryMinimum}
                    salaryMaximum={jobData.salaryMaximum}
                    totalEmployee={jobData.totalEmployee}
                  />
                  <section className={applyOrQuickApplyContainerStyle}>
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
