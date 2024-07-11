import { InterviewWhereUniqueInput } from "../interview/InterviewWhereUniqueInput";

export type QuestionCreateInput = {
  content?: string | null;
  interview?: InterviewWhereUniqueInput | null;
};
