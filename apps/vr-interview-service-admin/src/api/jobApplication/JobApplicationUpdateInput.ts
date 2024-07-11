import { InterviewUpdateManyWithoutJobApplicationsInput } from "./InterviewUpdateManyWithoutJobApplicationsInput";

export type JobApplicationUpdateInput = {
  requirements?: string | null;
  location?: string | null;
  jobTitle?: string | null;
  company?: string | null;
  description?: string | null;
  interviews?: InterviewUpdateManyWithoutJobApplicationsInput;
};
