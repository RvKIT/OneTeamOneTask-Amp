/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, UsersInTeam, Team, User } from "@prisma/client";

export class UsersInTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UsersInTeamFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersInTeamFindManyArgs>
  ): Promise<number> {
    return this.prisma.usersInTeam.count(args);
  }

  async findMany<T extends Prisma.UsersInTeamFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersInTeamFindManyArgs>
  ): Promise<UsersInTeam[]> {
    return this.prisma.usersInTeam.findMany(args);
  }
  async findOne<T extends Prisma.UsersInTeamFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersInTeamFindUniqueArgs>
  ): Promise<UsersInTeam | null> {
    return this.prisma.usersInTeam.findUnique(args);
  }
  async create<T extends Prisma.UsersInTeamCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersInTeamCreateArgs>
  ): Promise<UsersInTeam> {
    return this.prisma.usersInTeam.create<T>(args);
  }
  async update<T extends Prisma.UsersInTeamUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersInTeamUpdateArgs>
  ): Promise<UsersInTeam> {
    return this.prisma.usersInTeam.update<T>(args);
  }
  async delete<T extends Prisma.UsersInTeamDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersInTeamDeleteArgs>
  ): Promise<UsersInTeam> {
    return this.prisma.usersInTeam.delete(args);
  }

  async getTeam(parentId: string): Promise<Team | null> {
    return this.prisma.usersInTeam
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.usersInTeam
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
