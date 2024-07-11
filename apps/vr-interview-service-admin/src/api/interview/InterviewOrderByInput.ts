import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  interviewDate?: SortOrder;
  resumeId?: SortOrder;
  jobApplicationId?: SortOrder;
};
