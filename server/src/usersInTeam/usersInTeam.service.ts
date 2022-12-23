import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UsersInTeamServiceBase } from "./base/usersInTeam.service.base";

@Injectable()
export class UsersInTeamService extends UsersInTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
