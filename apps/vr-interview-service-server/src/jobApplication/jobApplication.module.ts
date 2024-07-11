import { Module } from "@nestjs/common";
import { JobApplicationModuleBase } from "./base/jobApplication.module.base";
import { JobApplicationService } from "./jobApplication.service";
import { JobApplicationController } from "./jobApplication.controller";
import { JobApplicationResolver } from "./jobApplication.resolver";

@Module({
  imports: [JobApplicationModuleBase],
  controllers: [JobApplicationController],
  providers: [JobApplicationService, JobApplicationResolver],
  exports: [JobApplicationService],
})
export class JobApplicationModule {}
