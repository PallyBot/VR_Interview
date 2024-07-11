import { InputJsonValue } from "../../types";
import { InterviewCreateNestedManyWithoutResumesInput } from "./InterviewCreateNestedManyWithoutResumesInput";

export type ResumeCreateInput = {
  candidateName?: string | null;
  email?: string | null;
  phone?: string | null;
  summary?: string | null;
  skills?: string | null;
  experience?: InputJsonValue;
  education?: InputJsonValue;
  interviews?: InterviewCreateNestedManyWithoutResumesInput;
};
