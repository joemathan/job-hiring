import axiosInstance from "../api/axiosInstance";
import { ICreateJobFormData } from "../types";

export const fetchJobs = () => {
  return axiosInstance
    .get<ICreateJobFormData[]>(`job`)
    .then((response) => response.data);
};

export const createJob = (job: ICreateJobFormData) => {
  return axiosInstance
    .post<ICreateJobFormData[]>(`job`, job)
    .then((response) => response.data);
};

export const updateJob = (job: ICreateJobFormData) => {
  return axiosInstance
    .put<ICreateJobFormData[]>(`job/${job.id}`, job)
    .then((response) => response.data);
};

export const deleteJob = (job: ICreateJobFormData) => {
  return axiosInstance
    .delete<ICreateJobFormData[]>(`job/${job.id}`)
    .then((response) => response.data);
};
