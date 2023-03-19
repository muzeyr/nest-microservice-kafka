/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/user/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/user/src/app/app.service.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const dto_1 = __webpack_require__("./libs/shared/src/lib/dto/index.ts");
const enum_1 = __webpack_require__("./libs/shared/src/lib/enum/index.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
    handleUserCreate(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.appService.createUser(data);
        });
    }
    handleGetUser(userId) {
        return this.appService.getUser(userId);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.EventPattern)(enum_1.UserEvent.USER_CREATE),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)(common_1.ValidationPipe)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof dto_1.CreateUserDto !== "undefined" && dto_1.CreateUserDto) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "handleUserCreate", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)('get_user'),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)('userId')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "handleGetUser", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/user/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_controller_1 = __webpack_require__("./apps/user/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/user/src/app/app.service.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const enum_1 = __webpack_require__("./libs/shared/src/lib/enum/index.ts");
const users_repository_1 = __webpack_require__("./apps/user/src/app/users.repository.ts");
const config_1 = __webpack_require__("@nestjs/config");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const entity_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
const typeorm_config_1 = __webpack_require__("./apps/user/src/config/typeorm.config.ts");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: enum_1.ServiceName.USER_MICROSERVICE,
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'user',
                            brokers: ['localhost:9092'],
                        },
                        producerOnlyMode: true,
                        consumer: {
                            groupId: 'user-consumer',
                        },
                    },
                },
            ]),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync(typeorm_config_1.typeOrmAsyncConfig),
            typeorm_1.TypeOrmModule.forFeature([entity_1.User])
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, users_repository_1.UsersRepository],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/user/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const users_repository_1 = __webpack_require__("./apps/user/src/app/users.repository.ts");
const entity_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
let AppService = class AppService {
    constructor(usersRepository, userRepository) {
        this.usersRepository = usersRepository;
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(this.constructor.name);
    }
    getData() {
        return { message: 'Welcome to user!' };
    }
    createUser(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.userRepository.save(data);
                this.logger.warn(result);
                return result;
            }
            catch (e) {
                this.logger.error(e);
            }
        });
    }
    getUser(id) {
        return this.usersRepository.findOne(id);
    }
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(1, (0, typeorm_1.InjectRepository)(entity_1.User)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof users_repository_1.UsersRepository !== "undefined" && users_repository_1.UsersRepository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/user/src/app/users.repository.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const entity_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
const crypto_1 = __webpack_require__("crypto");
let UsersRepository = class UsersRepository {
    constructor() {
        this.users = [];
    }
    save(createUserDto) {
        const user = this.populateUser(createUserDto);
        this.users.push(user);
    }
    findOne(id) {
        return this.users.find((u) => u.id === id) || null;
    }
    populateUser(createUserDto) {
        const user = new entity_1.User();
        user.id = (0, crypto_1.randomUUID)();
        user.fullName = createUserDto.fullName;
        user.email = createUserDto.email;
        user.createdAt = new Date();
        return user;
    }
};
UsersRepository = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], UsersRepository);
exports.UsersRepository = UsersRepository;


/***/ }),

/***/ "./apps/user/src/config/typeorm.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typeOrmAsyncConfig = void 0;
const tslib_1 = __webpack_require__("tslib");
const config_1 = __webpack_require__("@nestjs/config");
const entity_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
exports.typeOrmAsyncConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
        return {
            type: 'mysql',
            host: process.env.MYSQL_HOST,
            port: parseInt(process.env.MYSQL_PORT, 10),
            username: process.env.MYSQL_USER,
            database: process.env.MYSQL_DATABASE,
            password: process.env.MYSQL_PASSWORD,
            entities: [entity_1.User],
            migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
            extra: {
                charset: 'utf8mb4',
            },
            synchronize: true,
            logging: true,
        };
    }),
};


/***/ }),

/***/ "./libs/shared/src/lib/dto/create-product.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProductDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class CreateProductDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateProductDto.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
exports.CreateProductDto = CreateProductDto;


/***/ }),

/***/ "./libs/shared/src/lib/dto/create-user.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class CreateUserDto {
}
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the user',
        example: 'Uzeyr OZCAN',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "fullName", void 0);
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)({
        description: 'The email of the user',
        example: 'muzeyr@example.com',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "email", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./libs/shared/src/lib/dto/delete-product.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteProductDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class DeleteProductDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], DeleteProductDto.prototype, "id", void 0);
exports.DeleteProductDto = DeleteProductDto;


/***/ }),

/***/ "./libs/shared/src/lib/dto/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/create-user.dto.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/create-product.dto.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/update-product.dto.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/delete-product.dto.ts"), exports);


/***/ }),

/***/ "./libs/shared/src/lib/dto/update-product.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProductDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class UpdateProductDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], UpdateProductDto.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", Number)
], UpdateProductDto.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], UpdateProductDto.prototype, "id", void 0);
exports.UpdateProductDto = UpdateProductDto;


/***/ }),

/***/ "./libs/shared/src/lib/entities/base.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const class_transformer_1 = __webpack_require__("class-transformer");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const bson_1 = __webpack_require__("bson");
class BaseEntity {
    constructor(input) {
        if (input) {
            for (const [key, value] of Object.entries(input)) {
                this[key] = value;
            }
        }
    }
    populateSortableId() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const generatedId = new bson_1.ObjectId(bson_1.ObjectId.generate()).toHexString();
            console.log('generatedId', generatedId);
            this.id = generatedId;
        });
    }
}
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({
        primary: true,
        type: 'varchar',
        length: 36,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BaseEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, class_transformer_1.Expose)(),
    (0, typeorm_1.CreateDateColumn)(),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseEntity.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, class_transformer_1.Expose)(),
    (0, typeorm_1.UpdateDateColumn)(),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseEntity.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.DeleteDateColumn)({ nullable: true }),
    (0, typeorm_1.Index)({ unique: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], BaseEntity.prototype, "deletedAt", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.BeforeInsert)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BaseEntity.prototype, "populateSortableId", null);
exports.BaseEntity = BaseEntity;


/***/ }),

/***/ "./libs/shared/src/lib/entities/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/entities/base.entity.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/entities/user.entity.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/entities/product.entity.ts"), exports);


/***/ }),

/***/ "./libs/shared/src/lib/entities/product.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const base_entity_1 = __webpack_require__("./libs/shared/src/lib/entities/base.entity.ts");
const typeorm_1 = __webpack_require__("typeorm");
let ProductEntity = class ProductEntity extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], ProductEntity.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductEntity.prototype, "price", void 0);
ProductEntity = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], ProductEntity);
exports.ProductEntity = ProductEntity;


/***/ }),

/***/ "./libs/shared/src/lib/entities/user.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__("tslib");
const base_entity_1 = __webpack_require__("./libs/shared/src/lib/entities/base.entity.ts");
const typeorm_1 = __webpack_require__("typeorm");
let User = class User extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "fullName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
User = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;


/***/ }),

/***/ "./libs/shared/src/lib/enum/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/enum/service-name.enum.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/enum/user-event.enum.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/enum/product-event.enum.ts"), exports);


/***/ }),

/***/ "./libs/shared/src/lib/enum/product-event.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductEvent = void 0;
var ProductEvent;
(function (ProductEvent) {
    ProductEvent["PRODUCT_CREATE"] = "product.create";
    ProductEvent["PRODUCT_UPDATE"] = "product.update";
    ProductEvent["PRODUCT_DELETE"] = "product.delete";
    ProductEvent["PRODUCT_LIST"] = "product.list";
    ProductEvent["PRODUCT_DETAIL"] = "product.detail";
})(ProductEvent = exports.ProductEvent || (exports.ProductEvent = {}));


/***/ }),

/***/ "./libs/shared/src/lib/enum/service-name.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceName = void 0;
var ServiceName;
(function (ServiceName) {
    ServiceName["USER"] = "user";
    ServiceName["USER_MICROSERVICE"] = "user.microservice";
    ServiceName["USER_CONSUMER"] = "user-consumer";
    ServiceName["PRODUCT"] = "product";
    ServiceName["PRODUCT_MICROSERVICE"] = "product.microservice";
    ServiceName["PRODUCT_CONSUMER"] = "product-consumer";
})(ServiceName = exports.ServiceName || (exports.ServiceName = {}));


/***/ }),

/***/ "./libs/shared/src/lib/enum/user-event.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEvent = void 0;
var UserEvent;
(function (UserEvent) {
    UserEvent["USER_CREATE"] = "user.create";
})(UserEvent = exports.UserEvent || (exports.UserEvent = {}));


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bson":
/***/ ((module) => {

module.exports = require("bson");

/***/ }),

/***/ "class-transformer":
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "crypto":
/***/ ((module) => {

module.exports = require("crypto");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/user/src/app/app.module.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const enum_1 = __webpack_require__("./libs/shared/src/lib/enum/index.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
            transport: microservices_1.Transport.KAFKA,
            options: {
                client: {
                    brokers: ['localhost:9092'],
                },
                consumer: {
                    groupId: enum_1.ServiceName.USER_CONSUMER,
                },
            },
        });
        yield app.listen();
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map