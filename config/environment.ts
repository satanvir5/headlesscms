export const ENV_CONFIG = {
    APP_NAME: process.env.APP_NAME,
    APP_ENVIRONMENT: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT,
} as const;