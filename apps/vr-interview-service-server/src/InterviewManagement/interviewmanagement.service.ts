import { Injectable } from "@nestjs/common";
import { FetchInterviewInput } from "../interviewManagement/FetchInterviewInput";
import { InterviewResponse } from "../interviewManagement/InterviewResponse";
import { ScheduleInterviewInput } from "../interviewManagement/ScheduleInterviewInput";

@Injectable()
export class InterviewManagementService {
  constructor() {}
  async FetchInterview(args: FetchInterviewInput): Promise<InterviewResponse> {
    throw new Error("Not implemented");
  }
  async ScheduleInterview(args: ScheduleInterviewInput): Promise<InterviewResponse> {
    throw new Error("Not implemented");
  }
}
