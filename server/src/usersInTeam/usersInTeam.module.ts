import { Module } from "@nestjs/common";
import { UsersInTeamModuleBase } from "./base/usersInTeam.module.base";
import { UsersInTeamService } from "./usersInTeam.service";
import { UsersInTeamController } from "./usersInTeam.controller";

@Module({
  imports: [UsersInTeamModuleBase],
  controllers: [UsersInTeamController],
  providers: [UsersInTeamService],
  exports: [UsersInTeamService],
})
export class UsersInTeamModule {}
