import { SortOrder } from "../../util/SortOrder";

export type ResumeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  candidateName?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  summary?: SortOrder;
  skills?: SortOrder;
  experience?: SortOrder;
  education?: SortOrder;
};
