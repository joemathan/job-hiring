import { Control, FieldErrors, UseFormReset } from "react-hook-form";

interface ILabelProps {
  title: string;
  isRequired: boolean;
  placeholder: string;
  type: string;
  name: string;
  control: Control<CreateJobFormData, any>;
  isError: boolean;
  rules: {
    required: boolean;
    validate: {};
  };
  children: JSX.Element;
  showTitle?: boolean;
  labelContainerStyle: string;
  labelTitleStyle: string;
  labelInputStyle: string;
}

interface IButtonProps {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonStyle: string;
  disabled?: boolean;
}

interface IModalProps {
  children: JSX.Element | JSX.Element[];
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnModalClose: () => void;
}

interface IRadioButtonProps {
  title: string;
  children: JSX.Element | JSX.Element[];
  radioButtonTitleStyle: string;
}

interface ICreateJobFormData {
  [key: string]: string | number | boolean;
  id?: string;
  jobTitle: string;
  companyName: string;
  industry: string;
  location: string;
  remoteType: string;
  experienceMinimum: number | undefined;
  experienceMaximum: number | undefined;
  salaryMinimum: number | undefined;
  salaryMaximum: number | undefined;
  totalEmployee: string;
  quickApply: boolean;
  externalApply: boolean;
}

interface IEditIconProps {
  style: string;
  onClick: () => void;
}

interface IDeleteIconProps {
  style: string;
  onClick: () => void;
}

interface IcardProps {
  children: JSX.Element | JSX.Element[];
  cardStyle: string;
}

interface ICandidateGeneralDetailsProps {
  [key: string]:
    | string
    | ICreateJobFormData
    | UseFormReset<ICreateJobFormData>
    | React.Dispatch<React.SetStateAction<boolean>>
    | React.Dispatch<React.SetStateAction<string>>
    | React.Dispatch<React.SetStateAction<boolean>>
    | UseMutateFunction<
        any,
        AxiosError<unknown, any>,
        ICreateJobFormData,
        unknown
      >;
  jobTitle: string;
  companyName: string;
  industry: string;
  location: string;
  remoteType: string;
  jobData: ICreateJobFormData;
  reset: UseFormReset<ICreateJobFormData>;
  setIsCreateJobModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  setIsEditClicked: React.Dispatch<React.SetStateAction<boolean>>;
  deleteJobMutate: UseMutateFunction<
    any,
    AxiosError<unknown, any>,
    ICreateJobFormData,
    unknown
  >;
  jobTitleStyle: string;
  iconStyle: string;
  companyStyle: string;
  locationStyle: string;
}

interface ICandidateOtherDetailsProps {
  [key: string]: string | number | undefined;
  experienceMinimum: number | undefined;
  experienceMaximum: number | undefined;
  salaryMinimum: number | undefined;
  salaryMaximum: number | undefined;
  totalEmployee: string;
}

interface IJobCardListProps {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  jobsData: ICreateJobFormData[];
  setIsCreateJobModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  setIsEditClicked: React.Dispatch<React.SetStateAction<boolean>>;
  reset: UseFormReset<ICreateJobFormData>;
  deleteJobMutate: UseMutateFunction<
    any,
    AxiosError<unknown, any>,
    ICreateJobFormData,
    unknown
  >;
}

interface IJobFormStepOneProps {
  control: Control<ICreateJobFormData, any>;
  errors: FieldErrors<ICreateJobFormData>;
}

interface IJobFormStepTwoProps {
  control: Control<ICreateJobFormData, any>;
  errors: FieldErrors<ICreateJobFormData>;
  selectedOption: string;
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSaveClicked: boolean;
}
