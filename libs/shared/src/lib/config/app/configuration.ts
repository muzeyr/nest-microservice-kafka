import { registerAs } from '@nestjs/config';
export default registerAs('app', () => ({
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

