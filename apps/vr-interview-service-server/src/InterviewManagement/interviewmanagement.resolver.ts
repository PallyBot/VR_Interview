import * as graphql from "@nestjs/graphql";
import { FetchInterviewInput } from "../interviewManagement/FetchInterviewInput";
import { InterviewResponse } from "../interviewManagement/InterviewResponse";
import { ScheduleInterviewInput } from "../interviewManagement/ScheduleInterviewInput";
import { InterviewManagementService } from "./interviewmanagement.service";

export class InterviewManagementResolver {
  constructor(protected readonly service: InterviewManagementService) {}

  @graphql.Query(() => InterviewResponse)
  async FetchInterview(
    @graphql.Args()
    args: FetchInterviewInput
  ): Promise<InterviewResponse> {
    return this.service.FetchInterview(args);
  }

  @graphql.Mutation(() => InterviewResponse)
  async ScheduleInterview(
    @graphql.Args()
    args: ScheduleInterviewInput
  ): Promise<InterviewResponse> {
    return this.service.ScheduleInterview(args);
  }
}
