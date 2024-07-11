import { Module } from "@nestjs/common";
import { UserAuthenticationService } from "./userauthentication.service";
import { UserAuthenticationController } from "./userauthentication.controller";
import { UserAuthenticationResolver } from "./userauthentication.resolver";

@Module({
  controllers: [UserAuthenticationController],
  providers: [UserAuthenticationService, UserAuthenticationResolver],
  exports: [UserAuthenticationService],
})
export class UserAuthenticationModule {}
