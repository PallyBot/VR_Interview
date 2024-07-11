import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserAuthenticationService } from "./userauthentication.service";
import { SignUpInput } from "../userAuthentication/SignUpInput";
import { AuthResponse } from "../userAuthentication/AuthResponse";

@swagger.ApiTags("userAuthentications")
@common.Controller("userAuthentications")
export class UserAuthenticationController {
  constructor(protected readonly service: UserAuthenticationService) {}

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: AuthResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: SignUpInput
  ): Promise<AuthResponse> {
        return this.service.Login(body);
      }

  @common.Post("/signup")
  @swagger.ApiOkResponse({
    type: AuthResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SignUp(
    @common.Body()
    body: SignUpInput
  ): Promise<AuthResponse> {
        return this.service.SignUp(body);
      }
}
