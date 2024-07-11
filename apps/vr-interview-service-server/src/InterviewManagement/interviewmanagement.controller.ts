import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InterviewManagementService } from "./interviewmanagement.service";
import { ScheduleInterviewInput } from "../interviewManagement/ScheduleInterviewInput";
import { InterviewResponse } from "../interviewManagement/InterviewResponse";

@swagger.ApiTags("interviewManagements")
@common.Controller("interviewManagements")
export class InterviewManagementController {
  constructor(protected readonly service: InterviewManagementService) {}

  @common.Get("/interview/:id")
  @swagger.ApiOkResponse({
    type: InterviewResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchInterview(
    @common.Body()
    body: ScheduleInterviewInput
  ): Promise<InterviewResponse> {
        return this.service.FetchInterview(body);
      }

  @common.Post("/schedule")
  @swagger.ApiOkResponse({
    type: InterviewResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScheduleInterview(
    @common.Body()
    body: ScheduleInterviewInput
  ): Promise<InterviewResponse> {
        return this.service.ScheduleInterview(body);
      }
}
