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
  Question as PrismaQuestion,
  Interview as PrismaInterview,
} from "@prisma/client";

export class QuestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.QuestionCountArgs, "select">): Promise<number> {
    return this.prisma.question.count(args);
  }

  async questions(
    args: Prisma.QuestionFindManyArgs
  ): Promise<PrismaQuestion[]> {
    return this.prisma.question.findMany(args);
  }
  async question(
    args: Prisma.QuestionFindUniqueArgs
  ): Promise<PrismaQuestion | null> {
    return this.prisma.question.findUnique(args);
  }
  async createQuestion(
    args: Prisma.QuestionCreateArgs
  ): Promise<PrismaQuestion> {
    return this.prisma.question.create(args);
  }
  async updateQuestion(
    args: Prisma.QuestionUpdateArgs
  ): Promise<PrismaQuestion> {
    return this.prisma.question.update(args);
  }
  async deleteQuestion(
    args: Prisma.QuestionDeleteArgs
  ): Promise<PrismaQuestion> {
    return this.prisma.question.delete(args);
  }

  async getInterview(parentId: string): Promise<PrismaInterview | null> {
    return this.prisma.question
      .findUnique({
        where: { id: parentId },
      })
      .interview();
  }
}
