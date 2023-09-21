import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ReactNotifications,
  Store,
  iNotification,
} from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Button from "../components/Button/Button";
import JobCardList from "../components/JobCardList/JobCardList";
import JobFormStepOne from "../components/JobFormStepOne/JobFormStepOne";
import JobFormStepTwo from "../components/JobFormStepTwo/JobFormStepTwo";
import Modal from "../components/Modal/Modal";
import {
  createErrorMessage,
  createJobButtonName,
  createJobTitle,
  createSuccessMessage,
  deleteErrorMessage,
  deleteSuccessMessage,
  externalApplyOption,
  nextButtonName,
  primaryButtonStyle,
  quickApplyOption,
  saveButtonName,
  updateErrorMessage,
  updateSuccessMessage,
} from "../constants";
import useCreateJob from "../hooks/useCreateJob";
import useDeleteJob from "../hooks/useDeleteJob";
import { useFetchJobs } from "../hooks/useFetchJobs";
import useUpdateJob from "../hooks/useUpdateJob";
import { ICreateJobFormData } from "../types";
import { areGivenValuesNotEmpty, saniziteJobData } from "../utils";

function Dashboard() {
  const [isCreateJobModalOpen, setIsCreateJobModalOpen] = useState(false);
  const [isStepOneValid, setIsStepOneValid] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const {
    isLoading,
    isError,
    isSuccess,
    data: jobsData,
    refetch,
  } = useFetchJobs();

  const {
    isLoading: isJobCreationLoading,
    isError: isJobCreationError,
    isSuccess: isJobCreationSuccess,
    mutate,
    reset: jobMuatationReset,
  } = useCreateJob();

  const {
    isLoading: isJobUpdateLoading,
    isError: isJobUpdateError,
    isSuccess: isJobUpdateSuccess,
    mutate: updateJobMutate,
    reset: jobUpdateMuatationReset,
  } = useUpdateJob();

  const {
    isError: isJobDeleteError,
    isSuccess: isJobDeleteSuccess,
    mutate: deleteJobMutate,
    reset: jobDeleteMuatationReset,
  } = useDeleteJob();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ICreateJobFormData>();

  const handleFormStateUponSuccess = () => {
    refetch();
    setIsCreateJobModalOpen(false);
    setSelectedOption("");
    setIsStepOneValid(false);
    setIsSaveClicked(false);
    reset();
  };

  useEffect(() => {
    if (isJobCreationSuccess) {
      handleFormStateUponSuccess();
      jobMuatationReset();
      Store.addNotification(createSuccessMessage as iNotification);
    }
  }, [isJobCreationSuccess]);

  useEffect(() => {
    if (isJobUpdateSuccess) {
      handleFormStateUponSuccess();
      jobUpdateMuatationReset();
      setIsEditClicked(false);
      Store.addNotification(updateSuccessMessage as iNotification);
    }
  }, [isJobUpdateSuccess]);

  useEffect(() => {
    if (isJobDeleteSuccess) {
      handleFormStateUponSuccess();
      jobDeleteMuatationReset();
      Store.addNotification(deleteSuccessMessage as iNotification);
    }
  }, [isJobDeleteSuccess]);

  if (isJobCreationError) {
    Store.addNotification(createErrorMessage as iNotification);
    jobMuatationReset();
  }

  if (isJobUpdateError) {
    Store.addNotification(updateErrorMessage as iNotification);
    jobUpdateMuatationReset();
  }

  if (isJobDeleteError) {
    Store.addNotification(deleteErrorMessage as iNotification);
    jobDeleteMuatationReset();
  }

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleOnModalClose = () => {
    setIsStepOneValid(false);
    setSelectedOption("");
    setIsSaveClicked(false);
    reset();
  };

  const onSubmit = (data: ICreateJobFormData) => {
    if (areGivenValuesNotEmpty(data)) {
      setIsStepOneValid(true);
    }
    if (selectedOption && isSaveClicked) {
      data.quickApply = selectedOption === quickApplyOption;
      data.externalApply = selectedOption === externalApplyOption;
      const validJobData = saniziteJobData(data);
      if (isEditClicked) {
        updateJobMutate(validJobData);
        return;
      }
      mutate(validJobData);
    }
  };

  return (
    <>
      <Button
        name={createJobButtonName}
        onClick={() => {
          reset({
            jobTitle: "",
            companyName: "",
            industry: "",
            location: "",
            remoteType: "",
            experienceMinimum: undefined,
            experienceMaximum: undefined,
            salaryMinimum: undefined,
            salaryMaximum: undefined,
            totalEmployee: "",
            quickApply: false,
            externalApply: false,
          });
          setIsCreateJobModalOpen(true);
        }}
        buttonStyle={primaryButtonStyle}
      />
      <ReactNotifications />
      <JobCardList
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        jobsData={jobsData as ICreateJobFormData[]}
        setIsCreateJobModalOpen={setIsCreateJobModalOpen}
        setSelectedOption={setSelectedOption}
        setIsEditClicked={setIsEditClicked}
        reset={reset}
        deleteJobMutate={deleteJobMutate}
      />
      <Modal
        isModalOpen={isCreateJobModalOpen}
        setIsModalOpen={setIsCreateJobModalOpen}
        handleOnModalClose={handleOnModalClose}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="fixed inset-0 flex w-screen items-center justify-center p-4 border rounded-[10px] border-cardBorderColor"
        >
          <Dialog.Panel className="w-[577px] min-h-[564px] rounded bg-cardBgColor p-8 flex flex-col items-start gap-6">
            <Dialog.Title className="leading-titleLineHeight font-titleFontWeight text-titleFontSize text-dark">
              {createJobTitle}
            </Dialog.Title>
            {!isStepOneValid && (
              <JobFormStepOne control={control} errors={errors} />
            )}
            {isStepOneValid && (
              <JobFormStepTwo
                control={control}
                errors={errors}
                selectedOption={selectedOption}
                handleOptionChange={handleOptionChange}
                isSaveClicked={isSaveClicked}
              />
            )}
            <div className="mt-16 w-full flex justify-end">
              <Button
                buttonStyle={primaryButtonStyle}
                name={
                  isJobCreationLoading || isJobUpdateLoading
                    ? "Loading..."
                    : isStepOneValid
                    ? saveButtonName
                    : nextButtonName
                }
                onClick={() => {
                  if (isJobCreationLoading || isJobUpdateLoading) {
                    return;
                  }
                  if (isStepOneValid) {
                    setIsSaveClicked(true);
                  }
                }}
                disabled={isJobCreationLoading || isJobUpdateLoading}
              />
            </div>
          </Dialog.Panel>
        </form>
      </Modal>
    </>
  );
}

export default Dashboard;
