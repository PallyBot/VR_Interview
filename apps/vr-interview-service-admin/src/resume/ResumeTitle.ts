import { Resume as TResume } from "../api/resume/Resume";

export const RESUME_TITLE_FIELD = "candidateName";

export const ResumeTitle = (record: TResume): string => {
  return record.candidateName?.toString() || String(record.id);
};
