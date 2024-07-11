import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InterviewWhereUniqueInput } from "../interview/InterviewWhereUniqueInput";

export type QuestionWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  interview?: InterviewWhereUniqueInput;
};
