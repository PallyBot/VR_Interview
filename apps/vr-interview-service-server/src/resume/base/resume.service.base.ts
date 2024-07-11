/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Resume as PrismaResume,
  Interview as PrismaInterview,
} from "@prisma/client";

export class ResumeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ResumeCountArgs, "select">): Promise<number> {
    return this.prisma.resume.count(args);
  }

  async resumes(args: Prisma.ResumeFindManyArgs): Promise<PrismaResume[]> {
    return this.prisma.resume.findMany(args);
  }
  async resume(
    args: Prisma.ResumeFindUniqueArgs
  ): Promise<PrismaResume | null> {
    return this.prisma.resume.findUnique(args);
  }
  async createResume(args: Prisma.ResumeCreateArgs): Promise<PrismaResume> {
    return this.prisma.resume.create(args);
  }
  async updateResume(args: Prisma.ResumeUpdateArgs): Promise<PrismaResume> {
    return this.prisma.resume.update(args);
  }
  async deleteResume(args: Prisma.ResumeDeleteArgs): Promise<PrismaResume> {
    return this.prisma.resume.delete(args);
  }

  async findInterviews(
    parentId: string,
    args: Prisma.InterviewFindManyArgs
  ): Promise<PrismaInterview[]> {
    return this.prisma.resume
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .interviews(args);
  }
}
