import { Module } from "@nestjs/common";
import { ResumeModule } from "./resume/resume.module";
import { JobApplicationModule } from "./jobApplication/jobApplication.module";
import { QuestionModule } from "./question/question.module";
import { InterviewModule } from "./interview/interview.module";
import { UserModule } from "./user/user.module";
import { InterviewManagementModule } from "./InterviewManagement/interviewmanagement.module";
import { ResumeManagementModule } from "./ResumeManagement/resumemanagement.module";
import { UserAuthenticationModule } from "./UserAuthentication/userauthentication.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ResumeModule,
    JobApplicationModule,
    QuestionModule,
    InterviewModule,
    UserModule,
    InterviewManagementModule,
    ResumeManagementModule,
    UserAuthenticationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
