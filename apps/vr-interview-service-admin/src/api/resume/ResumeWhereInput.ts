import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";

export type ResumeWhereInput = {
  id?: StringFilter;
  candidateName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  summary?: StringNullableFilter;
  skills?: StringNullableFilter;
  experience?: JsonFilter;
  education?: JsonFilter;
  interviews?: InterviewListRelationFilter;
};
