import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";
import { JobApplicationWhereUniqueInput } from "../jobApplication/JobApplicationWhereUniqueInput";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";

export type InterviewWhereInput = {
  id?: StringFilter;
  interviewDate?: DateTimeNullableFilter;
  resume?: ResumeWhereUniqueInput;
  jobApplication?: JobApplicationWhereUniqueInput;
  questions?: QuestionListRelationFilter;
};
