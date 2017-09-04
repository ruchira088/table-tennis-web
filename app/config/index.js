import developmentConfig from "./development"
import productionConfig, { ENV_NAME } from "./production"
import defaultConfig from "./default"

const getConfiguration = env =>
    Object.assign({}, defaultConfig, env.toUpperCase() === ENV_NAME ? productionConfig : developmentConfig)

export default getConfiguration(NODE_ENV)