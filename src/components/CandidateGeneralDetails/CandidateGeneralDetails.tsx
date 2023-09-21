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
        <h1 className="text-black text-2xl font-normal not-italic">
          {jobTitle}
        </h1>
        <section className="flex">
          <EditIcon
            onClick={handleEditIconClick}
            style="w-6 h-6 cursor-pointer"
          />
          <DeleteIcon
            style="w-6 h-6 cursor-pointer"
            onClick={handleDeleteClick}
          />
        </section>
      </div>
      <p className="text-black text-base font-normal not-italic">
        {companyName} - {industry}
      </p>
      {(location || remoteType) && (
        <p className="text-locationColor text-base font-normal not-italic">
          {location} ({remoteType})
        </p>
      )}
    </section>
  );
};

export default CandidateGeneralDetails;
