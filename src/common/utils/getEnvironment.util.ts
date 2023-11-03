
process.env.NODE_ENV = process.env.NODE_ENV || "development"
process.env.APP_ENV  = process.env.APP_ENV || "development"

const configCurrentPath      = `${__dirname}/../../../config`
const currentEnvironment     = `/${process.env.APP_ENV}.env`
export const environmentPath = configCurrentPath + currentEnvironment