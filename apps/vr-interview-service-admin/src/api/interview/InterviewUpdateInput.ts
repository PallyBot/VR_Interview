import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";
import { JobApplicationWhereUniqueInput } from "../jobApplication/JobApplicationWhereUniqueInput";
import { QuestionUpdateManyWithoutInterviewsInput } from "./QuestionUpdateManyWithoutInterviewsInput";

export type InterviewUpdateInput = {
  interviewDate?: Date | null;
  resume?: ResumeWhereUniqueInput | null;
  jobApplication?: JobApplicationWhereUniqueInput | null;
  questions?: QuestionUpdateManyWithoutInterviewsInput;
};
