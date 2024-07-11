import { Injectable } from "@nestjs/common";
import { LoginInput } from "../userAuthentication/LoginInput";
import { AuthResponse } from "../userAuthentication/AuthResponse";
import { SignUpInput } from "../userAuthentication/SignUpInput";

@Injectable()
export class UserAuthenticationService {
  constructor() {}
  async Login(args: LoginInput): Promise<AuthResponse> {
    throw new Error("Not implemented");
  }
  async SignUp(args: SignUpInput): Promise<AuthResponse> {
    throw new Error("Not implemented");
  }
}
