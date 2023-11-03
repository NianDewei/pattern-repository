import { createContainer, asClass } from "awilix"
import { TestService } from "./services/test.service"
import { Application } from "express"
import { scopePerRequest } from "awilix-express"

const container = createContainer({ injectionMode: "CLASSIC" })

container.register({
	testService: asClass(TestService).scoped()
})

export const loadContainer = (app: Application) => {
	app.use(scopePerRequest(container))
}
