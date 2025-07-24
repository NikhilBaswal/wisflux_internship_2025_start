import { Controller, Get, Post, Param, Body, NotFoundException, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FirewallGuard } from 'src/firewall/firewall.guard';

@Controller('products')
export class ProductsController {
  // Inject the service using constructor
  constructor(private readonly productsService: ProductsService) {}

  // GET /products
  @Get()
  getAllProducts() {
    return this.productsService.findAll();  //  Call service method
  }

  // GET /products/:id
  @Get(':id')
  getProductById(@Param('id',ParseIntPipe) id: number) {
    try {
      return this.productsService.findById(id);   // + sign is for typecasting
    } catch (error) {
      throw new NotFoundException(error.message)
    }  //  Call service method
  }

  // POST /products
  @Post()
  @UseGuards(FirewallGuard)
  createProduct(@Body(new ValidationPipe({transform: true})) body: CreateProductDto) {
    return this.productsService.create(body);  //  Call service method
  }
}
