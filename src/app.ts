import dotenv from "dotenv"
import express from "express"
import type { Application } from "express"

import { loadControllers } from "awilix-express"
import { loadContainer } from "./container"
import { environmentPath } from "./utils/getEnvironment.util"

dotenv.config({ path: environmentPath })

const app: Application = express()

loadContainer(app)
app.use(loadControllers("./controllers/*.ts", { cwd: __dirname }))

export { app }
