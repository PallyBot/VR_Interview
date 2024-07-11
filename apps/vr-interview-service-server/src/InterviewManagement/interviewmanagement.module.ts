import { Module } from "@nestjs/common";
import { InterviewManagementService } from "./interviewmanagement.service";
import { InterviewManagementController } from "./interviewmanagement.controller";
import { InterviewManagementResolver } from "./interviewmanagement.resolver";

@Module({
  controllers: [InterviewManagementController],
  providers: [InterviewManagementService, InterviewManagementResolver],
  exports: [InterviewManagementService],
})
export class InterviewManagementModule {}
