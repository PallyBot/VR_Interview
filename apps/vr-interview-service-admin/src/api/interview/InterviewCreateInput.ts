import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";
import { JobApplicationWhereUniqueInput } from "../jobApplication/JobApplicationWhereUniqueInput";
import { QuestionCreateNestedManyWithoutInterviewsInput } from "./QuestionCreateNestedManyWithoutInterviewsInput";

export type InterviewCreateInput = {
  interviewDate?: Date | null;
  resume?: ResumeWhereUniqueInput | null;
  jobApplication?: JobApplicationWhereUniqueInput | null;
  questions?: QuestionCreateNestedManyWithoutInterviewsInput;
};
