import { JobApplicationWhereUniqueInput } from "./JobApplicationWhereUniqueInput";
import { JobApplicationUpdateInput } from "./JobApplicationUpdateInput";

export type UpdateJobApplicationArgs = {
  where: JobApplicationWhereUniqueInput;
  data: JobApplicationUpdateInput;
};
