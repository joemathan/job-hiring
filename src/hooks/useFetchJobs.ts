import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { fetchJobs } from "../services";
import { ICreateJobFormData } from "../types";

export const useFetchJobs = () => {
  return useQuery<ICreateJobFormData[], AxiosError>(
    ["fetchJobs"],
    () => fetchJobs(),
    {
      cacheTime: 0,
      staleTime: 0,
      refetchOnWindowFocus: false,
    }
  );
};
