import { JobApplication as TJobApplication } from "../api/jobApplication/JobApplication";

export const JOBAPPLICATION_TITLE_FIELD = "jobTitle";

export const JobApplicationTitle = (record: TJobApplication): string => {
  return record.jobTitle?.toString() || String(record.id);
};
