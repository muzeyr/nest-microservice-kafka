/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_controller_1 = __webpack_require__("./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
const user_module_1 = __webpack_require__("./apps/api/src/user/user.module.ts");
const product_module_1 = __webpack_require__("./apps/api/src/product/product.module.ts");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, product_module_1.ProductModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/product/product.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const product_service_1 = __webpack_require__("./apps/api/src/product/product.service.ts");
const dto_1 = __webpack_require__("./libs/shared/src/lib/dto/index.ts");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    create(createProductDto) {
        return this.productService.create(createProductDto);
    }
    update(id, createProductDto) {
        return this.productService.update(id, createProductDto);
    }
    delete(id) {
        return this.productService.delete(id);
    }
    activeProducts() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.productService.activeProducts();
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)(common_1.ValidationPipe)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof dto_1.CreateProductDto !== "undefined" && dto_1.CreateProductDto) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ProductController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)(common_1.ValidationPipe)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_b = typeof dto_1.UpdateProductDto !== "undefined" && dto_1.UpdateProductDto) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ProductController.prototype, "update", null);
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ProductController.prototype, "delete", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "activeProducts", null);
ProductController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('product'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _c : Object])
], ProductController);
exports.ProductController = ProductController;


/***/ }),

/***/ "./apps/api/src/product/product.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const product_controller_1 = __webpack_require__("./apps/api/src/product/product.controller.ts");
const product_service_1 = __webpack_require__("./apps/api/src/product/product.service.ts");
const user_module_1 = __webpack_require__("./apps/api/src/user/user.module.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const enum_1 = __webpack_require__("./libs/shared/src/lib/enum/index.ts");
let ProductModule = class ProductModule {
};
ProductModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: enum_1.ServiceName.PRODUCT_MICROSERVICE,
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: enum_1.ServiceName.PRODUCT,
                            brokers: ['localhost:9092'],
                        },
                        producerOnlyMode: true,
                        consumer: {
                            groupId: enum_1.ServiceName.PRODUCT_CONSUMER,
                        },
                    },
                },
                {
                    name: enum_1.ServiceName.USER_MICROSERVICE,
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: enum_1.ServiceName.USER,
                            brokers: ['localhost:9092'],
                        },
                        producerOnlyMode: true,
                        consumer: {
                            groupId: enum_1.ServiceName.USER_CONSUMER,
                        },
                    },
                },
            ]),
        ],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService, user_module_1.UserModule],
    })
], ProductModule);
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./apps/api/src/product/product.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const enum_1 = __webpack_require__("./libs/shared/src/lib/enum/index.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
let ProductService = class ProductService {
    constructor(authClient) {
        this.authClient = authClient;
    }
    create(createProductDto) {
        this.authClient.emit(enum_1.ProductEvent.PRODUCT_CREATE, JSON.stringify(createProductDto));
    }
    update(id, updateProductDto) {
        updateProductDto.id = id;
        this.authClient.emit(enum_1.ProductEvent.PRODUCT_UPDATE, JSON.stringify(updateProductDto));
    }
    delete(id) {
        this.authClient.emit(enum_1.ProductEvent.PRODUCT_DELETE, JSON.stringify(id));
    }
    activeProducts() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.authClient
                .emit(enum_1.ProductEvent.PRODUCT_LIST, JSON.stringify({}))
                .subscribe((data) => {
                return data;
            });
        });
    }
};
ProductService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, common_1.Inject)(enum_1.ServiceName.USER_MICROSERVICE)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof microservices_1.ClientKafka !== "undefined" && microservices_1.ClientKafka) === "function" ? _a : Object])
], ProductService);
exports.ProductService = ProductService;


/***/ }),

/***/ "./apps/api/src/user/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const dto_1 = __webpack_require__("./libs/shared/src/lib/dto/index.ts");
const user_service_1 = __webpack_require__("./apps/api/src/user/user.service.ts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(createUserDto) {
        return this.userService.create(createUserDto);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)('sign-up'),
    (0, tslib_1.__param)(0, (0, common_1.Body)(common_1.ValidationPipe)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof dto_1.CreateUserDto !== "undefined" && dto_1.CreateUserDto) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserController.prototype, "createUser", null);
UserController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('user'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./apps/api/src/user/user.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_controller_1 = __webpack_require__("./apps/api/src/user/user.controller.ts");
const user_service_1 = __webpack_require__("./apps/api/src/user/user.service.ts");
const enum_1 = __webpack_require__("./libs/shared/src/lib/enum/index.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
let UserModule = class UserModule {
};
UserModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: enum_1.ServiceName.USER_MICROSERVICE,
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: enum_1.ServiceName.USER,
                            brokers: ['localhost:9092'],
                        },
                        producerOnlyMode: true,
                        consumer: {
                            groupId: enum_1.ServiceName.USER_CONSUMER,
                        },
                    },
                },
            ]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/api/src/user/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const enum_1 = __webpack_require__("./libs/shared/src/lib/enum/index.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
let UserService = class UserService {
    constructor(authClient) {
        this.authClient = authClient;
    }
    create(createUserDto) {
        this.authClient.emit(enum_1.UserEvent.USER_CREATE, JSON.stringify(createUserDto));
    }
};
UserService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, common_1.Inject)(enum_1.ServiceName.USER_MICROSERVICE)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof microservices_1.ClientKafka !== "undefined" && microservices_1.ClientKafka) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


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

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

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
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Cats example')
            .setDescription('The cats API description')
            .setVersion('1.0')
            .addTag('cats')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('doc', app, document);
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
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