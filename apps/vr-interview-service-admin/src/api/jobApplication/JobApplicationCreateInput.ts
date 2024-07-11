import { InterviewCreateNestedManyWithoutJobApplicationsInput } from "./InterviewCreateNestedManyWithoutJobApplicationsInput";

export type JobApplicationCreateInput = {
  requirements?: string | null;
  location?: string | null;
  jobTitle?: string | null;
  company?: string | null;
  description?: string | null;
  interviews?: InterviewCreateNestedManyWithoutJobApplicationsInput;
};
