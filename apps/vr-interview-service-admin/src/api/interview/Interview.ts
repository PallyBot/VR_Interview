import { Resume } from "../resume/Resume";
import { JobApplication } from "../jobApplication/JobApplication";
import { Question } from "../question/Question";

export type Interview = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  interviewDate: Date | null;
  resume?: Resume | null;
  jobApplication?: JobApplication | null;
  questions?: Array<Question>;
};
