import * as graphql from "@nestjs/graphql";
import { UploadResumeInput } from "../resumeManagement/UploadResumeInput";
import { ResumeResponse } from "../resumeManagement/ResumeResponse";
import { ViewResumeInput } from "../resumeManagement/ViewResumeInput";
import { ResumeManagementService } from "./resumemanagement.service";

export class ResumeManagementResolver {
  constructor(protected readonly service: ResumeManagementService) {}

  @graphql.Mutation(() => ResumeResponse)
  async UploadResume(
    @graphql.Args()
    args: UploadResumeInput
  ): Promise<ResumeResponse> {
    return this.service.UploadResume(args);
  }

  @graphql.Query(() => ResumeResponse)
  async ViewResume(
    @graphql.Args()
    args: ViewResumeInput
  ): Promise<ResumeResponse> {
    return this.service.ViewResume(args);
  }
}
