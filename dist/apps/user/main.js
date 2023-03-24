/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/authentication/authentication.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const local_strategy_1 = __webpack_require__("./apps/api/src/app/authentication/local.strategy.ts");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const jwt_strategy_1 = __webpack_require__("./apps/api/src/app/authentication/strategy/jwt.strategy.ts");
const user_module_1 = __webpack_require__("./apps/api/src/user/user.module.ts");
const config_1 = __webpack_require__("./libs/shared/src/lib/config/index.ts");
const jwt_nodblookup_strategy_1 = __webpack_require__("./apps/api/src/app/authentication/strategy/jwt.nodblookup.strategy.ts");
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            passport_1.PassportModule,
            config_1.AppConfigModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.AppConfigModule],
                inject: [config_1.AppConfigService],
                useFactory: (configService) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
                    return ({
                        secret: configService.jwtSecret,
                        signOptions: {
                            expiresIn: configService.jwtExpires,
                            audience: 'bursaBT',
                            issuer: 'bursaBT',
                            algorithm: 'HS256',
                        },
                    });
                }),
            }),
        ],
        providers: [
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            jwt_nodblookup_strategy_1.JwtNoDbLookupStrategy,
        ],
        controllers: [],
        exports: [],
    })
], AuthenticationModule);
exports["default"] = AuthenticationModule;


/***/ }),

/***/ "./apps/api/src/app/authentication/dto/localloginrequest.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocialLoginResponse = exports.LoginResponse = exports.CreateUserRequest = exports.SnapchatLoginRequest = exports.FacebookLoginRequest = exports.AppleLoginRequest = exports.AccessTokenRequest = exports.LocalLoginRequest = exports.UserUpdateRequest = exports.PhoneNumberVerificationRequest = exports.PhoneNumberRequest = exports.BaseLoginRequest = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const validators_1 = __webpack_require__("./libs/shared/src/lib/validators/index.ts");
const entity_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
class BaseLoginRequest {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.ValidateIf)((o) => (0, class_validator_1.isDefined)(o.strategy)),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], BaseLoginRequest.prototype, "strategy", void 0);
exports.BaseLoginRequest = BaseLoginRequest;
class PhoneNumberRequest {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, validators_1.IsPhoneNumberDataValid)(),
    (0, tslib_1.__metadata)("design:type", String)
], PhoneNumberRequest.prototype, "phoneNumber", void 0);
exports.PhoneNumberRequest = PhoneNumberRequest;
class PhoneNumberVerificationRequest {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, validators_1.IsPhoneNumberDataValid)(),
    (0, tslib_1.__metadata)("design:type", String)
], PhoneNumberVerificationRequest.prototype, "phoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], PhoneNumberVerificationRequest.prototype, "token", void 0);
exports.PhoneNumberVerificationRequest = PhoneNumberVerificationRequest;
class UserUpdateRequest {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.ValidateIf)((o) => o.email !== undefined),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, validators_1.IsEmailDomainValid)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateRequest.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.ValidateIf)((o) => o.phoneNumber !== undefined),
    (0, class_validator_1.IsNotEmpty)(),
    (0, validators_1.IsPhoneNumberDataValid)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateRequest.prototype, "phoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.ValidateIf)((o) => o.userName !== undefined),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateRequest.prototype, "userName", void 0);
exports.UserUpdateRequest = UserUpdateRequest;
class LocalLoginRequest extends BaseLoginRequest {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, validators_1.IsEmailDomainValid)(),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], LocalLoginRequest.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], LocalLoginRequest.prototype, "password", void 0);
exports.LocalLoginRequest = LocalLoginRequest;
class AccessTokenRequest extends BaseLoginRequest {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], AccessTokenRequest.prototype, "access_token", void 0);
exports.AccessTokenRequest = AccessTokenRequest;
class AppleLoginRequest extends AccessTokenRequest {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], AppleLoginRequest.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], AppleLoginRequest.prototype, "lastName", void 0);
exports.AppleLoginRequest = AppleLoginRequest;
class FacebookLoginRequest extends AccessTokenRequest {
}
exports.FacebookLoginRequest = FacebookLoginRequest;
class SnapchatLoginRequest extends AccessTokenRequest {
}
exports.SnapchatLoginRequest = SnapchatLoginRequest;
class CreateUserRequest extends LocalLoginRequest {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.Matches)(/^[^\s]*$/),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserRequest.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserRequest.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserRequest.prototype, "lastName", void 0);
exports.CreateUserRequest = CreateUserRequest;
class LoginResponse {
}
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof entity_1.User !== "undefined" && entity_1.User) === "function" ? _a : Object)
], LoginResponse.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], LoginResponse.prototype, "isVerified", void 0);
exports.LoginResponse = LoginResponse;
class SocialLoginResponse extends LoginResponse {
}
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SocialLoginResponse.prototype, "newUser", void 0);
exports.SocialLoginResponse = SocialLoginResponse;


/***/ }),

/***/ "./apps/api/src/app/authentication/local.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_local_1 = __webpack_require__("passport-local");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const localloginrequest_dto_1 = __webpack_require__("./apps/api/src/app/authentication/dto/localloginrequest.dto.ts");
const user_service_1 = __webpack_require__("./apps/api/src/user/user.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(userService) {
        super({
            usernameField: 'email',
        });
        this.userService = userService;
    }
    validate(email, password) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const localLoginRequest = new localloginrequest_dto_1.LocalLoginRequest();
            localLoginRequest.email = email;
            localLoginRequest.password = password;
            const result = yield this.userService.login(localLoginRequest);
            return result.user;
        });
    }
};
LocalStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./apps/api/src/app/authentication/strategy/jwt-authentication.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let JwtAuthenticationGuard = class JwtAuthenticationGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthenticationGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], JwtAuthenticationGuard);
exports["default"] = JwtAuthenticationGuard;


/***/ }),

/***/ "./apps/api/src/app/authentication/strategy/jwt.nodblookup.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtNoDbLookupStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const passport_2 = __webpack_require__("@nestjs/passport");
const entity_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
const config_1 = __webpack_require__("./libs/shared/src/lib/config/index.ts");
let JwtNoDbLookupStrategy = class JwtNoDbLookupStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwtnolookup') {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.jwtSecret,
        });
        this.configService = configService;
    }
    validate(payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return new entity_1.User({ id: payload.sub });
        });
    }
};
JwtNoDbLookupStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof config_1.AppConfigService !== "undefined" && config_1.AppConfigService) === "function" ? _a : Object])
], JwtNoDbLookupStrategy);
exports.JwtNoDbLookupStrategy = JwtNoDbLookupStrategy;
let JwtNoDbLookupGuard = class JwtNoDbLookupGuard extends (0, passport_2.AuthGuard)('jwtnolookup') {
};
JwtNoDbLookupGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], JwtNoDbLookupGuard);
exports["default"] = JwtNoDbLookupGuard;


/***/ }),

/***/ "./apps/api/src/app/authentication/strategy/jwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("./libs/shared/src/lib/config/index.ts");
const user_service_1 = __webpack_require__("./apps/api/src/user/user.service.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(userService, configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.jwtSecret,
        });
        this.userService = userService;
        this.configService = configService;
    }
    validate(payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userService.getByIdWithCaching(payload.sub);
            return user;
        });
    }
};
JwtStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof config_1.AppConfigService !== "undefined" && config_1.AppConfigService) === "function" ? _b : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/api/src/app/entities/default.response.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UseDefaultSecurity = void 0;
const swagger_1 = __webpack_require__("@nestjs/swagger");
const common_1 = __webpack_require__("@nestjs/common");
const jwt_authentication_guard_1 = __webpack_require__("./apps/api/src/app/authentication/strategy/jwt-authentication.guard.ts");
function UseDefaultSecurity() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(jwt_authentication_guard_1.default), (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor));
}
exports.UseDefaultSecurity = UseDefaultSecurity;


/***/ }),

/***/ "./apps/api/src/user/profile.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const dto_1 = __webpack_require__("./libs/shared/src/lib/dto/index.ts");
const user_service_1 = __webpack_require__("./apps/api/src/user/user.service.ts");
const common_2 = __webpack_require__("./libs/shared/src/lib/common/index.ts");
const default_response_entity_1 = __webpack_require__("./apps/api/src/app/entities/default.response.entity.ts");
const entity_1 = __webpack_require__("./libs/shared/src/lib/entities/index.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
let ProfileController = class ProfileController {
    constructor(userService) {
        this.userService = userService;
        this.logger = new common_1.Logger(this.constructor.name);
    }
    changePassword(user, updatePasswordRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userService.changePassword(user, updatePasswordRequest);
        });
    }
    loginRoot(login) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userService.login(login);
        });
    }
    getUserById(userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userService.getUserById(userId);
        });
    }
    getCurrentUserProfile(user) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userService.getUserById(user.id);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Patch)('/password'),
    (0, tslib_1.__param)(0, (0, common_2.CurrentUser)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof entity_1.User !== "undefined" && entity_1.User) === "function" ? _a : Object, typeof (_b = typeof dto_1.UpdatePasswordRequest !== "undefined" && dto_1.UpdatePasswordRequest) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileController.prototype, "changePassword", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/login'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof dto_1.LoginRequest !== "undefined" && dto_1.LoginRequest) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileController.prototype, "loginRoot", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/userById/:userId'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('userId')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileController.prototype, "getUserById", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/me'),
    (0, tslib_1.__param)(0, (0, common_2.CurrentUser)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof entity_1.User !== "undefined" && entity_1.User) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ProfileController.prototype, "getCurrentUserProfile", null);
ProfileController = (0, tslib_1.__decorate)([
    (0, default_response_entity_1.UseDefaultSecurity)(),
    (0, swagger_1.ApiTags)('Profile Services'),
    (0, common_1.Controller)('profile'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _f : Object])
], ProfileController);
exports.ProfileController = ProfileController;


/***/ }),

/***/ "./apps/api/src/user/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const dto_1 = __webpack_require__("./libs/shared/src/lib/dto/index.ts");
const user_service_1 = __webpack_require__("./apps/api/src/user/user.service.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(createUserDto) {
        return this.userService.create(createUserDto);
    }
    loginRoot(login) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userService.login(login);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)('sign-up'),
    (0, tslib_1.__param)(0, (0, common_1.Body)(common_1.ValidationPipe)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof dto_1.CreateUserDto !== "undefined" && dto_1.CreateUserDto) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserController.prototype, "createUser", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/login'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof dto_1.LoginRequest !== "undefined" && dto_1.LoginRequest) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserController.prototype, "loginRoot", null);
UserController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('User Services'),
    (0, common_1.Controller)('user'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object])
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
const passport_1 = __webpack_require__("@nestjs/passport");
const profile_controller_1 = __webpack_require__("./apps/api/src/user/profile.controller.ts");
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
                        consumer: {
                            groupId: enum_1.ServiceName.USER_CONSUMER,
                        },
                    },
                },
            ]),
            passport_1.PassportModule
        ],
        controllers: [user_controller_1.UserController, profile_controller_1.ProfileController],
        providers: [user_service_1.UserService,],
        exports: [user_service_1.UserService],
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
const rxjs_1 = __webpack_require__("rxjs");
const exception_handler_1 = __webpack_require__("@nestjs/core/errors/exception-handler");
let UserService = class UserService {
    constructor(authClient) {
        this.authClient = authClient;
        this.logger = new common_1.Logger(this.constructor.name);
    }
    onModuleInit() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.authClient.subscribeToResponseOf(enum_1.UserEvent.USER_BY_ID);
            this.authClient.subscribeToResponseOf(enum_1.UserEvent.USER_CREATE);
            this.authClient.subscribeToResponseOf(enum_1.UserEvent.USER_LOGIN);
            yield this.authClient.connect();
        });
    }
    create(createUserDto) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield (0, rxjs_1.lastValueFrom)(this.authClient.send(enum_1.UserEvent.USER_CREATE, JSON.stringify(createUserDto)));
        });
    }
    changePassword(user, updatePasswordRequest) {
        updatePasswordRequest.user = user;
        return this.authClient.emit(enum_1.UserEvent.USER_UPDATE_PASSWORD, JSON.stringify(updatePasswordRequest));
    }
    login(login) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield (0, rxjs_1.lastValueFrom)(this.authClient.send(enum_1.UserEvent.USER_LOGIN, JSON.stringify(login)));
        });
    }
    getUserById(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield (0, rxjs_1.lastValueFrom)(this.authClient.send(enum_1.UserEvent.USER_BY_ID, JSON.stringify({ userId: id })));
        });
    }
    onModuleDestroy() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.authClient.close();
        });
    }
    getByIdWithCaching(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.getUserById(id);
            if (!user) {
                throw new exception_handler_1.ExceptionHandler();
            }
            return user;
        });
    }
};
UserService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, common_1.Inject)(enum_1.ServiceName.USER_MICROSERVICE)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof microservices_1.ClientKafka !== "undefined" && microservices_1.ClientKafka) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./apps/user/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
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
        this.logger = new common_1.Logger(this.constructor.name);
    }
    getData() {
        return this.appService.getData();
    }
    handleUserCreate(data, context) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.appService.createUser(data);
            delete result.password;
            const originalMessage = context.getMessage();
            return {
                result,
                offset: originalMessage.offset,
                timestamp: originalMessage.timestamp,
            };
        });
    }
    handleGetUser(userId, context) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.appService.getUser(userId);
            const originalMessage = context.getMessage();
            return {
                result,
                offset: originalMessage.offset,
                timestamp: originalMessage.timestamp,
            };
        });
    }
    changePassword(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.appService.changeUserPassword(data);
        });
    }
    login(data, context) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.appService.login(data);
            const originalMessage = context.getMessage();
            return {
                result,
                offset: originalMessage.offset,
                timestamp: originalMessage.timestamp,
            };
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(enum_1.UserEvent.USER_CREATE),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)(common_1.ValidationPipe)),
    (0, tslib_1.__param)(1, (0, microservices_1.Ctx)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof dto_1.CreateUserDto !== "undefined" && dto_1.CreateUserDto) === "function" ? _a : Object, typeof (_b = typeof microservices_1.KafkaContext !== "undefined" && microservices_1.KafkaContext) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "handleUserCreate", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(enum_1.UserEvent.USER_BY_ID),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)('userId')),
    (0, tslib_1.__param)(1, (0, microservices_1.Ctx)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, typeof (_c = typeof microservices_1.KafkaContext !== "undefined" && microservices_1.KafkaContext) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "handleGetUser", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.EventPattern)(enum_1.UserEvent.USER_UPDATE_PASSWORD),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)(common_1.ValidationPipe)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof dto_1.UpdatePasswordRequest !== "undefined" && dto_1.UpdatePasswordRequest) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "changePassword", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(enum_1.UserEvent.USER_LOGIN),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__param)(1, (0, microservices_1.Ctx)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof dto_1.LoginRequest !== "undefined" && dto_1.LoginRequest) === "function" ? _e : Object, typeof (_f = typeof microservices_1.KafkaContext !== "undefined" && microservices_1.KafkaContext) === "function" ? _f : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "login", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_g = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _g : Object])
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
const authentication_module_1 = __webpack_require__("./apps/api/src/app/authentication/authentication.module.ts");
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
            typeorm_1.TypeOrmModule.forFeature([entity_1.User]),
            authentication_module_1.default,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, users_repository_1.UsersRepository],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/user/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
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
const login_response_dto_1 = __webpack_require__("./libs/shared/src/lib/dto/user/login.response.dto.ts");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const enum_1 = __webpack_require__("./libs/shared/src/lib/enum/index.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const bcrypt_2 = __webpack_require__("bcrypt");
let AppService = class AppService {
    constructor(authClient, usersRepository, jwtService, userRepository) {
        this.authClient = authClient;
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
                user.password = yield (0, bcrypt_2.hash)(data.password, 10);
                const result = yield this.userRepository.save(user);
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
            return yield this.userRepository.findOne({
                where: {
                    id,
                }
            });
        });
    }
    generateUserJwtToken(user) {
        return this.jwtService.sign({ sub: user.id, cometToken: user.cometToken });
    }
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, common_1.Inject)(enum_1.ServiceName.USER_MICROSERVICE)),
    (0, tslib_1.__param)(3, (0, typeorm_1.InjectRepository)(entity_1.User)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof microservices_1.ClientKafka !== "undefined" && microservices_1.ClientKafka) === "function" ? _a : Object, typeof (_b = typeof users_repository_1.UsersRepository !== "undefined" && users_repository_1.UsersRepository) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object])
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

/***/ "./libs/shared/src/lib/common/decorators/current.user.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceId = exports.ClientVersion = exports.CurrentUser = void 0;
const common_1 = __webpack_require__("@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
exports.ClientVersion = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['x-app-version'];
});
exports.DeviceId = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['x-device-id'];
});


/***/ }),

/***/ "./libs/shared/src/lib/common/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/common/decorators/current.user.decorator.ts"), exports);


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

/***/ "./libs/shared/src/lib/config/app/configuration.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppConfigModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const Joi = __webpack_require__("@hapi/joi");
const configuration_service_1 = __webpack_require__("./libs/shared/src/lib/config/app/configuration.service.ts");
const configuration_1 = __webpack_require__("./libs/shared/src/lib/config/app/configuration.ts");
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
                useClass: configuration_service_1.AppConfigService,
            },
            configuration_service_1.AppConfigService,
        ],
        exports: [config_1.ConfigService, configuration_service_1.AppConfigServiceInterface, configuration_service_1.AppConfigService],
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;


/***/ }),

/***/ "./libs/shared/src/lib/config/app/configuration.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppConfigService = exports.AppConfigServiceInterface = void 0;
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
exports.AppConfigService = AppConfigService;


/***/ }),

/***/ "./libs/shared/src/lib/config/app/configuration.ts":
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
    mysqlRootPassword: process.env.JWT_EXPIRES,
    mysqlPassword: process.env.JWT_EXPIRES,
    mysqlDatabase: process.env.JWT_EXPIRES,
    mysqlHost: process.env.JWT_EXPIRES,
}));


/***/ }),

/***/ "./libs/shared/src/lib/config/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppConfigService = exports.AppConfigModule = void 0;
const tslib_1 = __webpack_require__("tslib");
var configuration_module_1 = __webpack_require__("./libs/shared/src/lib/config/app/configuration.module.ts");
Object.defineProperty(exports, "AppConfigModule", ({ enumerable: true, get: function () { return configuration_module_1.AppConfigModule; } }));
var configuration_service_1 = __webpack_require__("./libs/shared/src/lib/config/app/configuration.service.ts");
Object.defineProperty(exports, "AppConfigService", ({ enumerable: true, get: function () { return configuration_service_1.AppConfigService; } }));
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/config/app/configuration.ts"), exports);


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
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)({
        description: 'Password',
        example: 'P@ssword123456',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(20),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiProperty)({
        description: 'Confirm password',
        example: 'P@ssword123456',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./libs/shared/src/lib/dto/user/login.request.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginRequest = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const email_domain_validator_1 = __webpack_require__("./libs/shared/src/lib/common/validators/email.domain.validator.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class LoginRequest {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, email_domain_validator_1.IsEmailDomainValid)(),
    (0, swagger_1.ApiProperty)({
        example: 'muzeyr@example.com',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LoginRequest.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'P@ssword123456',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LoginRequest.prototype, "password", void 0);
exports.LoginRequest = LoginRequest;


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
                console.log('hashPasswordField11');
                if (this.password && (0, bcrypt_1.getRounds)(this.password) != 10) {
                    console.log('hashPasswordField22');
                    this.password = yield (0, bcrypt_1.hash)(this.password, 10);
                }
                console.log('hashPasswordField332');
            }
            catch (_a) {
                console.log('hashPasswordField5555');
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
    UserEvent["USER_BY_ID"] = "user.by.id";
    UserEvent["USER_BY_ID_REPLY"] = "user.by.id.reply";
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

/***/ "./libs/shared/src/lib/validators/email.domain.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsEmailDomainValid = exports.IsEmailDomainValidConstraint = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const isEmail_1 = __webpack_require__("validator/lib/isEmail");
const common_1 = __webpack_require__("@nestjs/common");
const email_validator_1 = __webpack_require__("./libs/shared/src/lib/validators/email.validator.ts");
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

/***/ "./libs/shared/src/lib/validators/email.validator.ts":
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

/***/ "./libs/shared/src/lib/validators/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/validators/email.domain.validator.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/shared/src/lib/validators/phonenumber.validator.ts"), exports);


/***/ }),

/***/ "./libs/shared/src/lib/validators/phonenumber.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsPhoneNumberDataValid = exports.IsPhoneNumberValidConstraint = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const common_1 = __webpack_require__("@nestjs/common");
let IsPhoneNumberValidConstraint = class IsPhoneNumberValidConstraint {
    constructor() {
        this.logger = new common_1.Logger(this.constructor.name);
    }
    validate(phoneNumber, args) {
        return (0, class_validator_1.isDefined)(phoneNumber) && (0, class_validator_1.isPhoneNumber)(phoneNumber);
    }
    defaultMessage(validationArguments) {
        return `${validationArguments.property} must be a valid phone number`;
    }
};
IsPhoneNumberValidConstraint = (0, tslib_1.__decorate)([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], IsPhoneNumberValidConstraint);
exports.IsPhoneNumberValidConstraint = IsPhoneNumberValidConstraint;
function IsPhoneNumberDataValid(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: '',
            async: true,
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsPhoneNumberValidConstraint,
        });
    };
}
exports.IsPhoneNumberDataValid = IsPhoneNumberDataValid;


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

/***/ "@nestjs/core/errors/exception-handler":
/***/ ((module) => {

module.exports = require("@nestjs/core/errors/exception-handler");

/***/ }),

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

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

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "rxjs":
/***/ ((module) => {

module.exports = require("rxjs");

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