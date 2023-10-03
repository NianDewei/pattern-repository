import express from "express"
import type { Express, Response, Request } from "express"

export const app: Express = express()

app.get("/", (_: Request, res: Response): void => {
	res.status(201).json({
		message: "Hello World!"
	})
})
