import { createContainer, asClass } from "awilix"
import { TestService } from "./services/test.service"

export const container = createContainer()
container.register({
	TestService: asClass(TestService).scoped()
})
