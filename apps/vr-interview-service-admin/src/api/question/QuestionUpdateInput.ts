import { InterviewWhereUniqueInput } from "../interview/InterviewWhereUniqueInput";

export type QuestionUpdateInput = {
  content?: string | null;
  interview?: InterviewWhereUniqueInput | null;
};
