import * as graphql from "@nestjs/graphql";
import { JobApplicationResolverBase } from "./base/jobApplication.resolver.base";
import { JobApplication } from "./base/JobApplication";
import { JobApplicationService } from "./jobApplication.service";

@graphql.Resolver(() => JobApplication)
export class JobApplicationResolver extends JobApplicationResolverBase {
  constructor(protected readonly service: JobApplicationService) {
    super(service);
  }
}
