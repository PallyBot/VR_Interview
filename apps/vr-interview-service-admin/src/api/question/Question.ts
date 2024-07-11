import { Interview } from "../interview/Interview";

export type Question = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  interview?: Interview | null;
};
