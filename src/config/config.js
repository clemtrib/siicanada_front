import defaultConfig from "./default"
import developmentConfig from "./_development"
import productionConfig from "./_production"

const environment = process.env.NODE_ENV || "development"

let config = {}
switch (environment) {
    case "development":
        config = { ...defaultConfig, ...developmentConfig }
        break
    case "production":
        config = { ...defaultConfig, ...productionConfig }
        break
    default:
        break
}
const configuration = config

export default configuration
