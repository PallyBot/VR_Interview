import { Interview } from "../interview/Interview";

export type JobApplication = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  requirements: string | null;
  location: string | null;
  jobTitle: string | null;
  company: string | null;
  description: string | null;
  interviews?: Array<Interview>;
};
