import { Inject, Injectable } from '@nestjs/common';
import {
  CreateProductDto,
  UpdateProductDto,
} from '@nest-microservice-kafka/shared/dto';
import {
  ProductEvent,
  ServiceName,
} from '@nest-microservice-kafka/shared/enum';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  constructor(
    @Inject(ServiceName.USER_MICROSERVICE)
    private readonly authClient: ClientKafka
  ) {}

  create(createProductDto: CreateProductDto) {
    this.authClient.emit(
      ProductEvent.PRODUCT_CREATE,
      JSON.stringify(createProductDto)
    );
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    updateProductDto.id = id;
    this.authClient.emit(
      ProductEvent.PRODUCT_UPDATE,
      JSON.stringify(updateProductDto)
    );
  }
  delete(id: string) {
    this.authClient.emit(ProductEvent.PRODUCT_DELETE, JSON.stringify(id));
  }
  async activeProducts() {
    this.authClient
      .emit(ProductEvent.PRODUCT_LIST, JSON.stringify({}))
      .subscribe((data) => {
        return data;
      });
  }
}
