// users.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  
  @Get()
  getAllUsers() {
    return 'All users fetched!';
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `User with ID: ${id}`;
  }

  @Post()
  createUser(@Body() body: any) {
    return {
      message: 'User created!',
      data: body,
    };
  }
}
