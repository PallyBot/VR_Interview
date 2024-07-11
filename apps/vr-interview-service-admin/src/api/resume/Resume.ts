import { JsonValue } from "type-fest";
import { Interview } from "../interview/Interview";

export type Resume = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  candidateName: string | null;
  email: string | null;
  phone: string | null;
  summary: string | null;
  skills: string | null;
  experience: JsonValue;
  education: JsonValue;
  interviews?: Array<Interview>;
};
