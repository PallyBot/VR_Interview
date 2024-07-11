import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ResumeManagementService } from "./resumemanagement.service";
import { ViewResumeInput } from "../resumeManagement/ViewResumeInput";
import { ResumeResponse } from "../resumeManagement/ResumeResponse";

@swagger.ApiTags("resumeManagements")
@common.Controller("resumeManagements")
export class ResumeManagementController {
  constructor(protected readonly service: ResumeManagementService) {}

  @common.Post("/upload")
  @swagger.ApiOkResponse({
    type: ResumeResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadResume(
    @common.Body()
    body: ViewResumeInput
  ): Promise<ResumeResponse> {
        return this.service.UploadResume(body);
      }

  @common.Get("/resume/:id")
  @swagger.ApiOkResponse({
    type: ResumeResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ViewResume(
    @common.Body()
    body: ViewResumeInput
  ): Promise<ResumeResponse> {
        return this.service.ViewResume(body);
      }
}
