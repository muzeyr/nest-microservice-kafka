import { Injectable } from '@nestjs/common';
import { ProductEntity, User } from '@nest-microservice-kafka/shared/entity';
import {
  CreateProductDto,
  CreateUserDto,
} from '@nest-microservice-kafka/shared/dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductRepository {
  private readonly products: ProductEntity[] = [];

  save(ceateProductDto: CreateProductDto) {
    const product = this.populate(ceateProductDto);
    this.products.push(product);
  }

  findOne(id: string) {
    return this.products.find((u) => u.id === id) || null;
  }
  populate(ceateProductDto: CreateProductDto): ProductEntity {
    const productNew = new ProductEntity();
    productNew.id = randomUUID();
    productNew.name = ceateProductDto.name;
    productNew.price = ceateProductDto.price;
    productNew.createdAt = new Date();
    return productNew;
  }
}
