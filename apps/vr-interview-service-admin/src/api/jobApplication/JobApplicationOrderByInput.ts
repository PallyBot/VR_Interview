import { SortOrder } from "../../util/SortOrder";

export type JobApplicationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  requirements?: SortOrder;
  location?: SortOrder;
  jobTitle?: SortOrder;
  company?: SortOrder;
  description?: SortOrder;
};
