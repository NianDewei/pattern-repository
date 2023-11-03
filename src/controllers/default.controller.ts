import { GET, route } from "awilix-express"
import { Request, Response } from "express"

export class DefaultController {
	@route("/")
	@GET()
	public index(_req: Request, res: Response) {
		res.status(200).json({ message: "Hello World" })
	}
}
