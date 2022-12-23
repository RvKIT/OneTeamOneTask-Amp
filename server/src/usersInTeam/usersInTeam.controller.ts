import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsersInTeamService } from "./usersInTeam.service";
import { UsersInTeamControllerBase } from "./base/usersInTeam.controller.base";

@swagger.ApiTags("usersInTeams")
@common.Controller("usersInTeams")
export class UsersInTeamController extends UsersInTeamControllerBase {
  constructor(
    protected readonly service: UsersInTeamService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
