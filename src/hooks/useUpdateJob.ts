import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { updateJob } from "../services";
import { ICreateJobFormData } from "../types";

const useUpdateJob = () => {
  return useMutation<any, AxiosError, ICreateJobFormData>({
    mutationFn: updateJob,
  });
};

export default useUpdateJob;
