import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProductDto,
  UpdateProductDto,
} from '@nest-microservice-kafka/shared/dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body(ValidationPipe) createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) createProductDto: UpdateProductDto
  ) {
    return this.productService.update(id, createProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
  @Get()
  async activeProducts() {
    return this.productService.activeProducts();
  }
}
