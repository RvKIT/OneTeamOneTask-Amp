/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UsersInTeamService } from "../usersInTeam.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UsersInTeamCreateInput } from "./UsersInTeamCreateInput";
import { UsersInTeamWhereInput } from "./UsersInTeamWhereInput";
import { UsersInTeamWhereUniqueInput } from "./UsersInTeamWhereUniqueInput";
import { UsersInTeamFindManyArgs } from "./UsersInTeamFindManyArgs";
import { UsersInTeamUpdateInput } from "./UsersInTeamUpdateInput";
import { UsersInTeam } from "./UsersInTeam";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UsersInTeamControllerBase {
  constructor(
    protected readonly service: UsersInTeamService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "UsersInTeam",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UsersInTeam })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: UsersInTeamCreateInput
  ): Promise<UsersInTeam> {
    return await this.service.create({
      data: {
        ...data,

        team: {
          connect: data.team,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        id: true,
        isAdmin: true,

        team: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "UsersInTeam",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [UsersInTeam] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(UsersInTeamFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<UsersInTeam[]> {
    const args = plainToClass(UsersInTeamFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        isAdmin: true,

        team: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "UsersInTeam",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UsersInTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: UsersInTeamWhereUniqueInput
  ): Promise<UsersInTeam | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        isAdmin: true,

        team: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "UsersInTeam",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UsersInTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: UsersInTeamWhereUniqueInput,
    @common.Body() data: UsersInTeamUpdateInput
  ): Promise<UsersInTeam | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          team: {
            connect: data.team,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          id: true,
          isAdmin: true,

          team: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "UsersInTeam",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UsersInTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: UsersInTeamWhereUniqueInput
  ): Promise<UsersInTeam | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          isAdmin: true,

          team: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}