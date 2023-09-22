import { externalApplyOption, quickApplyOption } from "../../constants";
import { ICandidateGeneralDetailsProps } from "../../types";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import EditIcon from "../EditIcon/EditIcon";

const CandidateGeneralDetails = ({
  jobTitle,
  companyName,
  industry,
  location,
  remoteType,
  jobData,
  setIsCreateJobModalOpen,
  reset,
  setSelectedOption,
  setIsEditClicked,
  deleteJobMutate,
  jobTitleStyle,
  iconStyle,
  companyStyle,
  locationStyle,
}: ICandidateGeneralDetailsProps) => {
  const handleEditIconClick = () => {
    setIsEditClicked(true);
    reset(jobData);
    const quickApplySelectedOption = jobData.quickApply ? quickApplyOption : "";
    const quickOrExternalApplySelectedOption = jobData.externalApply
      ? externalApplyOption
      : quickApplySelectedOption;
    setSelectedOption(quickOrExternalApplySelectedOption);
    setIsCreateJobModalOpen(true);
  };

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (isConfirmed) {
      deleteJobMutate(jobData);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className={jobTitleStyle}>{jobTitle}</h1>
        <section className="flex">
          <EditIcon onClick={handleEditIconClick} style={iconStyle} />
          <DeleteIcon style={iconStyle} onClick={handleDeleteClick} />
        </section>
      </div>
      <p className={companyStyle}>
        {companyName} - {industry}
      </p>
      {(location || remoteType) && (
        <p className={locationStyle}>
          {location} ({remoteType})
        </p>
      )}
    </section>
  );
};

export default CandidateGeneralDetails;
