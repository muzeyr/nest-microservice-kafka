/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/user/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
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
    handleGetUser(userId, context) {
        return this.appService.getUser(userId);
    }
    changePassword(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.appService.changeUserPassword(data);
        });
    }
    login(data, context) {
        return this.appService.login(data);
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
    (0, microservices_1.MessagePattern)(enum_1.UserEvent.USER_BYID),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)('userId')),
    (0, tslib_1.__param)(1, (0, microservices_1.Ctx)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_b = typeof microservices_1.KafkaContext !== "undefined" && microservices_1.KafkaContext) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "handleGetUser", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.EventPattern)(enum_1.UserEvent.USER_UPDATE_PASSWORD),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)(common_1.ValidationPipe)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof dto_1.UpdatePasswordRequest !== "undefined" && dto_1.UpdatePasswordRequest) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "changePassword", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(enum_1.UserEvent.USER_LOGIN),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__param)(1, (0, microservices_1.Ctx)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof dto_1.LocalLoginRequest !== "undefined" && dto_1.LocalLoginRequest) === "function" ? _d : Object, typeof (_e = typeof microservices_1.KafkaContext !== "undefined" && microservices_1.KafkaContext) === "function" ? _e : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "login", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _f : Object])
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
const jwt_1 = __webpack_require__("@nestjs/jwt");
const configuration_module_1 = __webpack_require__("./apps/user/src/app/config/app/configuration.module.ts");
const configuration_service_1 = __webpack_require__("./apps/user/src/app/config/app/configuration.service.ts");
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
            jwt_1.JwtModule.registerAsync({
                imports: [configuration_module_1.default],
                inject: [configuration_service_1.default],
                useFactory: (configService) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
                    return ({
                        secret: configService.jwtSecret,
                        signOptions: {
                            expiresIn: configService.jwtExpires,
                        },
                    });
                }),
            }),
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


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const users_repository_1 = __webpack_require__("./apps/user/src/app/users.repository.ts");
const entity_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const dto_1 = __webpack_require__("./libs/shared/src/lib/dto/index.ts");
const bcrypt_1 = __webpack_require__("bcrypt");
const exception_1 = __webpack_require__("./libs/shared/src/lib/exception/index.ts");
const class_validator_1 = __webpack_require__("class-validator");
const bcrypt_2 = __webpack_require__("bcrypt");
const login_response_dto_1 = __webpack_require__("./libs/shared/src/lib/dto/user/login.response.dto.ts");
const jwt_1 = __webpack_require__("@nestjs/jwt");
let AppService = class AppService {
    constructor(usersRepository, jwtService, userRepository) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(this.constructor.name);
    }
    getData() {
        return { message: 'Welcome to user!' };
    }
    createUser(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = new entity_1.User();
                user.email = data.email;
                user.fullName = data.fullName;
                const result = yield this.userRepository.save(user);
                this.logger.warn(result);
                return result;
            }
            catch (e) {
                this.logger.error(e);
            }
        });
    }
    changeUserPassword(updatePasswordRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if ((0, bcrypt_1.compareSync)(updatePasswordRequest.password, updatePasswordRequest.user.password)) {
                updatePasswordRequest.user.password = updatePasswordRequest.newpassword;
                yield this.userRepository.save(updatePasswordRequest.user);
                const profileResponse = new dto_1.ProfileResponse();
                profileResponse.user = updatePasswordRequest.user;
                return profileResponse;
            }
            throw new exception_1.UserNotFoundException();
        });
    }
    login(loginRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: {
                    email: loginRequest.email,
                }
            });
            if (!(0, class_validator_1.isDefined)(user)) {
                throw new exception_1.BaseException('Uh oh. Are you sure? Check your email or password.', common_1.HttpStatus.BAD_REQUEST);
            }
            const isPasswordMatching = yield (0, bcrypt_2.compare)(loginRequest.password, user.password);
            if (!isPasswordMatching) {
                throw new exception_1.BaseException('Uh oh. Are you sure? Check your email or password.', common_1.HttpStatus.BAD_REQUEST);
            }
            user.password = undefined;
            const loginResponse = new login_response_dto_1.LoginResponse();
            loginResponse.accessToken = this.generateUserJwtToken(user);
            loginResponse.user = user;
            return loginResponse;
        });
    }
    getUser(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: {
                    id,
                }
            });
            this.logger.warn(JSON.stringify(user));
            return user;
        });
    }
    generateUserJwtToken(user) {
        return this.jwtService.sign({ sub: user.id, cometToken: user.cometToken });
    }
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(2, (0, typeorm_1.InjectRepository)(entity_1.User)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof users_repository_1.UsersRepository !== "undefined" && users_repository_1.UsersRepository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/user/src/app/config/app/configuration.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const configuration_1 = __webpack_require__("./apps/user/src/app/config/app/configuration.ts");
const configuration_service_1 = __webpack_require__("./apps/user/src/app/config/app/configuration.service.ts");
const config_1 = __webpack_require__("@nestjs/config");
const Joi = __webpack_require__("@hapi/joi");
let AppConfigModule = class AppConfigModule {
};
AppConfigModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                validationSchema: Joi.object({
                    JWT_SECRET: Joi.string().required(),
                    JWT_EXPIRES: Joi.string().required(),
                    MYSQL_ROOT_PASSWORD: Joi.string().required(),
                    MYSQL_USER: Joi.string().required(),
                    MYSQL_PASSWORD: Joi.string().required(),
                    MYSQL_DATABASE: Joi.string().required(),
                    MYSQL_HOST: Joi.string().required()
                }),
            }),
        ],
        providers: [
            config_1.ConfigService,
            {
                provide: configuration_service_1.AppConfigServiceInterface,
                useClass: configuration_service_1.default,
            },
            configuration_service_1.default,
        ],
        exports: [config_1.ConfigService, configuration_service_1.AppConfigServiceInterface, configuration_service_1.default],
    })
], AppConfigModule);
exports["default"] = AppConfigModule;


/***/ }),

/***/ "./apps/user/src/app/config/app/configuration.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppConfigServiceInterface = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
class AppConfigServiceInterface {
}
exports.AppConfigServiceInterface = AppConfigServiceInterface;
let AppConfigService = class AppConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    get jwtSecret() {
        return this.configService.get('app.jwtSecret');
    }
    get jwtExpires() {
        return this.configService.get('app.jwtExpires');
    }
    get mysqlRootPassword() {
        return this.configService.get('app.mysqlRootPassword');
    }
    get mysqlUser() {
        return this.configService.get('app.mysqlUser');
    }
    get mysqlPassword() {
        return this.configService.get('app.mysqlPassword');
    }
    get mysqlDatabase() {
        return this.configService.get('app.mysqlDatabase');
    }
    get mysqlHost() {
        return this.configService.get('app.mysqlHost');
    }
};
AppConfigService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AppConfigService);
exports["default"] = AppConfigService;


/***/ }),

/***/ "./apps/user/src/app/config/app/configuration.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__("@nestjs/config");
exports["default"] = (0, config_1.registerAs)('app', () => ({
    env: process.env.APP_ENV,
    name: process.env.APP_NAME,
    url: process.env.APP_URL,
    port: process.env.APP_PORT,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpires: process.env.JWT_EXPIRES,
    s3awsRegion: process.env.S3_AWS_REGION,
    s3awsAccessKeyId: process.env.S3_AWS_ACCESS_KEY_ID,
    s3awsSecretAccessKey: process.env.S3_AWS_SECRET_ACCESS_KEY,
    awsBucket: process.env.AWS_BUCKET,
    awsUrl: process.env.AWS_URL,
    cloudFrontPath: process.env.CLOUD_FRONT_PATH,
    appleClientId: process.env.APPLE_CLIENT_ID,
    stripeKey: process.env.STRIPE_KEY,
    stripeWebHookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    stripeCallbackBaseUrl: process.env.STRIPE_CALLBACK_BASE_URL,
    appIDAgora: process.env.APP_ID_AGORA,
    appCertificateAgora: process.env.APP_CERTIFICATE_AGORA,
    rootUrl: process.env.ROOT_URL,
    coconut: process.env.COCONUT,
    ablyKey: process.env.ABLY_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    cometChatApiKey: process.env.COMETCHAT_API_KEY,
    muxTokenSecret: process.env.MUX_TOKEN_ID,
    muxTokenId: process.env.MUX_TOKEN_SECRET,
    muxWebHookSecret: process.env.MUX_WEBHOOK_SECRET,
    muxPrefixUrl: process.env.MUX_PREFIX_URL,
    muxStatus: process.env.MUX_STATUS,
    isEnabledMuxStatusLiveStream: process.env.IS_ENABLED_MUX_STATUS_LIVE_STREAM,
    muxCron: process.env.MUX_CRON,
    redisUrl: process.env.REDIS_URL,
    redisPort: process.env.REDIS_PORT,
    redisDb: process.env.REDIS_DB,
    tSenseHost: process.env.TSENSE_HOST,
    tSensePort: process.env.TSENSE_PORT,
    tSenseProtocol: process.env.TSENSE_PROTOCOL,
    tSenseAdminApiKey: process.env.TSENSE_ADMIN_API_KEY,
    tSenseSearchOnlyApiKey: process.env.TSENSE_SEARCH_ONLY_API_KEY,
    usernameExpireDay: process.env.USERNAME_EXPIRE_DAY,
    scheduleStatus: process.env.SCHEDULE_STATUS,
    limitingStatus: process.env.LIMITING_STATUS,
    slackToken: process.env.SLACK_TOKEN,
    slackUrl: process.env.SLACK_URL,
    adminPanel: process.env.ADMIN_PANEL,
    envName: process.env.ENV_NAME,
}));


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

/***/ "./libs/shared/src/lib/common/utils/email.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateEmailAddressWithMx = void 0;
const tslib_1 = __webpack_require__("tslib");
const dns = __webpack_require__("dns");
function validateEmailAddressWithMx(emailAddress) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const domainName = emailAddress.split('@').pop();
        try {
            const lookupResult = yield dns.promises.resolveMx(domainName);
            if (lookupResult && lookupResult.length > 0) {
                return { isValid: true };
            }
            else {
                return { isValid: false, error: 'Email domain not valid' };
            }
        }
        catch (err) {
            if (err.code === 'ENOTFOUND') {
                return { isValid: false, error: 'Email domain not found' };
            }
            else {
                return { isValid: false, error: err.code };
            }
        }
    });
}
exports.validateEmailAddressWithMx = validateEmailAddressWithMx;


/***/ }),

/***/ "./libs/shared/src/lib/common/validators/email.domain.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsEmailDomainValid = exports.IsEmailDomainValidConstraint = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const email_validator_1 = __webpack_require__("./libs/shared/src/lib/common/utils/email.validator.ts");
const isEmail_1 = __webpack_require__("validator/lib/isEmail");
const common_1 = __webpack_require__("@nestjs/common");
let IsEmailDomainValidConstraint = class IsEmailDomainValidConstraint {
    constructor() {
        this.logger = new common_1.Logger(this.constructor.name);
    }
    validate(emailAddress, args) {
        this.logger.verbose('validating email address ' + emailAddress);
        if (!(0, class_validator_1.isDefined)(emailAddress) || !(0, isEmail_1.default)(emailAddress))
            return false;
        return (0, email_validator_1.validateEmailAddressWithMx)(emailAddress)
            .then((response) => {
            return response.isValid;
        })
            .catch((reason) => {
            this.logger.error(reason);
            return false;
        });
    }
    defaultMessage(validationArguments) {
        return validationArguments.property + ' must have valid email domain';
    }
};
IsEmailDomainValidConstraint = (0, tslib_1.__decorate)([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], IsEmailDomainValidConstraint);
exports.IsEmailDomainValidConstraint = IsEmailDomainValidConstraint;
function IsEmailDomainValid(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: '',
            async: true,
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailDomainValidConstraint,
        });
    };
}
exports.IsEmailDomainValid = IsEmailDomainValid;


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
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/user/create-user.dto.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/create-product.dto.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/update-product.dto.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/delete-product.dto.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/user/update-user.dto.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/user/create-user.dto.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/user/profile/user-profile.response.dto.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/user/profile/update-profile.dto.request.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/dto/user/login.request.dto.ts"), exports);


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

/***/ "./libs/shared/src/lib/dto/user/create-user.dto.ts":
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

/***/ "./libs/shared/src/lib/dto/user/login.request.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalLoginRequest = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const email_domain_validator_1 = __webpack_require__("./libs/shared/src/lib/common/validators/email.domain.validator.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class LocalLoginRequest {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, email_domain_validator_1.IsEmailDomainValid)(),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], LocalLoginRequest.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], LocalLoginRequest.prototype, "password", void 0);
exports.LocalLoginRequest = LocalLoginRequest;


/***/ }),

/***/ "./libs/shared/src/lib/dto/user/login.response.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginResponse = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const entities_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
class LoginResponse {
}
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof entities_1.User !== "undefined" && entities_1.User) === "function" ? _a : Object)
], LoginResponse.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
exports.LoginResponse = LoginResponse;


/***/ }),

/***/ "./libs/shared/src/lib/dto/user/profile/update-profile.dto.request.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileUserResponse = void 0;
const swagger_1 = __webpack_require__("@nestjs/swagger");
const entities_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
class ProfileUserResponse extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(entities_1.User, ['password'])) {
    constructor(user) {
        super(user);
    }
}
exports.ProfileUserResponse = ProfileUserResponse;


/***/ }),

/***/ "./libs/shared/src/lib/dto/user/profile/user-profile.response.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileResponse = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const update_profile_dto_request_1 = __webpack_require__("./libs/shared/src/lib/dto/user/profile/update-profile.dto.request.ts");
class ProfileResponse {
}
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof update_profile_dto_request_1.ProfileUserResponse !== "undefined" && update_profile_dto_request_1.ProfileUserResponse) === "function" ? _a : Object)
], ProfileResponse.prototype, "user", void 0);
exports.ProfileResponse = ProfileResponse;


/***/ }),

/***/ "./libs/shared/src/lib/dto/user/update-user.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePasswordRequest = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_validator_1 = __webpack_require__("class-validator");
const class_transformer_1 = __webpack_require__("class-transformer");
const entities_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
class UpdatePasswordRequest {
}
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Expose)(),
    (0, tslib_1.__metadata)("design:type", String)
], UpdatePasswordRequest.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Expose)(),
    (0, tslib_1.__metadata)("design:type", String)
], UpdatePasswordRequest.prototype, "newpassword", void 0);
(0, tslib_1.__decorate)([
    (0, class_transformer_1.Expose)(),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof entities_1.User !== "undefined" && entities_1.User) === "function" ? _a : Object)
], UpdatePasswordRequest.prototype, "user", void 0);
exports.UpdatePasswordRequest = UpdatePasswordRequest;


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
const common_1 = __webpack_require__("@nestjs/common");
const uuid_1 = __webpack_require__("uuid");
class BaseEntity {
    constructor(input) {
        this.logger = new common_1.Logger(this.constructor.name);
        if (input) {
            for (const [key, value] of Object.entries(input)) {
                this[key] = value;
            }
        }
    }
    beforeInsert() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.id = (0, uuid_1.v4)();
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
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    (0, tslib_1.__metadata)("design:type", String)
], BaseEntity.prototype, "cometToken", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.BeforeInsert)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BaseEntity.prototype, "beforeInsert", null);
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


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__("tslib");
const base_entity_1 = __webpack_require__("./libs/shared/src/lib/entities/base.entity.ts");
const typeorm_1 = __webpack_require__("typeorm");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_transformer_1 = __webpack_require__("class-transformer");
const bcrypt_1 = __webpack_require__("bcrypt");
let User = class User extends base_entity_1.BaseEntity {
    hashPasswordField() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.password && (0, bcrypt_1.getRounds)(this.password) != 10) {
                    this.password = yield (0, bcrypt_1.hash)(this.password, 10);
                }
            }
            catch (_a) {
                this.password = yield (0, bcrypt_1.hash)(this.password, 10);
            }
        });
    }
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "fullName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "birthDate", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.BeforeUpdate)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], User.prototype, "hashPasswordField", null);
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
    UserEvent["USER_BYID"] = "user.byid";
    UserEvent["USER_CREATE"] = "user.create";
    UserEvent["USER_LOGIN"] = "user.login";
    UserEvent["USER_UPDATE_PASSWORD"] = "user.update.password";
})(UserEvent = exports.UserEvent || (exports.UserEvent = {}));


/***/ }),

/***/ "./libs/shared/src/lib/exception/baseException.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseException = void 0;
const common_1 = __webpack_require__("@nestjs/common");
class BaseException extends common_1.HttpException {
    constructor(response, status) {
        super(response, status);
        this.errorCode = -1000;
        this.responseDetail = response;
    }
    convertToResponseModel() {
        return {
            status: this.getStatus(),
            statusCode: this.errorCode,
            code: this.errorCode,
            errors: [{ code: this.errorCode, message: this.responseDetail }],
        };
    }
}
exports.BaseException = BaseException;


/***/ }),

/***/ "./libs/shared/src/lib/exception/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/exception/userNotFoundException.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/exception/baseException.ts"), exports);


/***/ }),

/***/ "./libs/shared/src/lib/exception/userNotFoundException.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailNotAllowedException = exports.UsernameNotAllowedException = exports.UserNotFoundException = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const baseException_1 = __webpack_require__("./libs/shared/src/lib/exception/baseException.ts");
class UserNotFoundException extends baseException_1.BaseException {
    constructor(objectOrError, description = 'User not found') {
        super(description, common_1.HttpStatus.NOT_FOUND);
        super.errorCode = 404;
    }
}
exports.UserNotFoundException = UserNotFoundException;
class UsernameNotAllowedException extends baseException_1.BaseException {
    constructor(username) {
        super(`Username(${username}) in use`, common_1.HttpStatus.CONFLICT);
    }
}
exports.UsernameNotAllowedException = UsernameNotAllowedException;
class EmailNotAllowedException extends baseException_1.BaseException {
    constructor(email) {
        super(`Email(${email}) in use`, common_1.HttpStatus.CONFLICT);
    }
}
exports.EmailNotAllowedException = EmailNotAllowedException;


/***/ }),

/***/ "@hapi/joi":
/***/ ((module) => {

module.exports = require("@hapi/joi");

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

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

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

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ "uuid":
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "validator/lib/isEmail":
/***/ ((module) => {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ "crypto":
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/***/ ((module) => {

module.exports = require("dns");

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
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
            transport: microservices_1.Transport.KAFKA,
            options: {
                client: {
                    brokers: ['localhost:9092'],
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