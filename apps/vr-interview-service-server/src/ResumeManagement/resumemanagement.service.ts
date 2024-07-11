import { Injectable } from "@nestjs/common";
import { UploadResumeInput } from "../resumeManagement/UploadResumeInput";
import { ResumeResponse } from "../resumeManagement/ResumeResponse";
import { ViewResumeInput } from "../resumeManagement/ViewResumeInput";

@Injectable()
export class ResumeManagementService {
  constructor() {}
  async UploadResume(args: UploadResumeInput): Promise<ResumeResponse> {
    throw new Error("Not implemented");
  }
  async ViewResume(args: ViewResumeInput): Promise<ResumeResponse> {
    throw new Error("Not implemented");
  }
}
