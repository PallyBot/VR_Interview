import { Module } from "@nestjs/common";
import { ResumeManagementService } from "./resumemanagement.service";
import { ResumeManagementController } from "./resumemanagement.controller";
import { ResumeManagementResolver } from "./resumemanagement.resolver";

@Module({
  controllers: [ResumeManagementController],
  providers: [ResumeManagementService, ResumeManagementResolver],
  exports: [ResumeManagementService],
})
export class ResumeManagementModule {}
