import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createJob } from "../services";
import { ICreateJobFormData } from "../types";

const useCreateJob = () => {
  return useMutation<any, AxiosError, ICreateJobFormData>({
    mutationFn: createJob,
  });
};

export default useCreateJob;
