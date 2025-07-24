import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { UsersModule } from './users/users.module';


@Module({
 
  controllers: [AppController, UsersController, ProductsController],
  providers: [AppService, ProductsService],
  imports: [UsersModule],
})
export class AppModule {}
