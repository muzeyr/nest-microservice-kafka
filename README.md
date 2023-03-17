# Nest Microservice with Kafka


✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Kafka Installation
✨You can check out this guide for setting up [Kafka locally.](https://blog.logrocket.com/building-rust-microservices-apache-kafka/#getting-started-kafka) ✨

## Nx installation
[Nx](https://nx.dev/) is a popular tool for managing monorepos
The CLI must be installed to quickly create mono repos.
```sudo npm i -g @nrwl/cli```

#### Creation of the first project and base structure

```npx create-nx-workspace@latest```

## Nest JS Installation (Kafka,microservices)
Installing required npm packages for Nest JS
```npm i @nestjs/microservices kafkajs class-validator class-transformer```


### Create a shared library by running the following command:
With this shared lib We can keep entity, enum objects and dto objects

``` nx g @nrwl/node:lib shared ```

###  Creating the api-gateway
```nx g @nrwl/nest:app api-gateway ```

###  Creating first user microservice
```nx g @nrwl/nest:app user-microservice ```


##### The following code block should be added to the main.ts in the User micro service.
// apps/user-microservice/src/main.ts
 ```
  async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'user-consumer',
        },
      },
    }
  );
  await app.listen();
} 
 ```

####  Every module in the api-gateway repo should be updated in the following structure.
// apps/api-gateway/src/user/user.module.ts
```
ClientsModule.register([
  {
    name: ServiceName.USER_MICROSERVICE,
        transport: Transport.KAFKA,
          options: {
            client: {
              clientId: ServiceName.USER,
              brokers: ['localhost:9092'],
            },
            producerOnlyMode: true,
            consumer: {
              groupId: ServiceName.USER_CONSUMER,
            },
      },
  },
]),
```

## New microservice

1. You can follow the steps below to create a new microservice.

``` nx g @nrwl/nest:app product-microservice ```

2. Create controllers and services that can be directed by product controllers in the Api-Gateway project.
``` cd apps/api-gateway ```

``` nest generate module product ```

``` nest generate controller product ```

``` nest generate service product ```

Add ProductModule to the import module in //apps/api-gateway/serc/app/app.module.ts.

##### If you need a new entity,


//libs/shared/src/lib/entities klasörü altında yeni entity oluştur ve index.ts ile dışarı export etmeyi unutma,

##### Create a new DTO object for Create and Update operations.

//libs/shared/src/lib/dto klasörü altında yeni dto oluştur ve index.ts ile dışarı export etmeyi unutma,
