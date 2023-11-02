import dotenv from "dotenv"
import express from "express"
import type { Application, Response, Request } from "express"

import { container } from './container'
import { TestService } from './services/test.service';

process.env.NODE_ENV = process.env.NODE_ENV || "development"
process.env.APP_ENV  = process.env.APP_ENV || "development"

const configCurrentPath  = `${__dirname}/../config`
const currentEnvironment = `/${process.env.APP_ENV}.env`
const environmentPath 	 = configCurrentPath + currentEnvironment

dotenv.config({ path: environmentPath})

const testService = container.resolve<TestService>('TestService')
console.log(testService.getTime())

export const app: Application = express()

app.get("/", (_: Request, res: Response): void => {
	res.status(201).json({
		message: "Hello World!"
	})
})
