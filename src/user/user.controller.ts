import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Post()
  create(@Body() createUser: CreateUserDto) {
    return this.userService.create(createUser);
  }

  @Get('/:id')
  getById(@Param('id') userId: number) {
    return this.userService.getById(userId);
  }
  @Put('/:id')
  update(@Param('id') userId: number, @Body() createUser: CreateUserDto) {
    return this.userService.update(userId, createUser);
  }

  @Delete('/:id')
  delete(@Param('id') userId: number) {
    return this.userService.delete(userId);
  }
}
