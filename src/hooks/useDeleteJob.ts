import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { deleteJob } from "../services";
import { ICreateJobFormData } from "../types";

const useDeleteJob = () => {
  return useMutation<any, AxiosError, ICreateJobFormData>({
    mutationFn: deleteJob,
  });
};

export default useDeleteJob;
