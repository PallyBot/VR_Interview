import * as graphql from "@nestjs/graphql";
import { LoginInput } from "../userAuthentication/LoginInput";
import { AuthResponse } from "../userAuthentication/AuthResponse";
import { SignUpInput } from "../userAuthentication/SignUpInput";
import { UserAuthenticationService } from "./userauthentication.service";

export class UserAuthenticationResolver {
  constructor(protected readonly service: UserAuthenticationService) {}

  @graphql.Mutation(() => AuthResponse)
  async Login(
    @graphql.Args()
    args: LoginInput
  ): Promise<AuthResponse> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => AuthResponse)
  async SignUp(
    @graphql.Args()
    args: SignUpInput
  ): Promise<AuthResponse> {
    return this.service.SignUp(args);
  }
}
