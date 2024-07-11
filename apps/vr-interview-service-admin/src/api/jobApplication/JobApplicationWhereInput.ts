import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";

export type JobApplicationWhereInput = {
  id?: StringFilter;
  requirements?: StringNullableFilter;
  location?: StringNullableFilter;
  jobTitle?: StringNullableFilter;
  company?: StringNullableFilter;
  description?: StringNullableFilter;
  interviews?: InterviewListRelationFilter;
};
