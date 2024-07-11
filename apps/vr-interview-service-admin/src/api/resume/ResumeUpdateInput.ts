import { InputJsonValue } from "../../types";
import { InterviewUpdateManyWithoutResumesInput } from "./InterviewUpdateManyWithoutResumesInput";

export type ResumeUpdateInput = {
  candidateName?: string | null;
  email?: string | null;
  phone?: string | null;
  summary?: string | null;
  skills?: string | null;
  experience?: InputJsonValue;
  education?: InputJsonValue;
  interviews?: InterviewUpdateManyWithoutResumesInput;
};
