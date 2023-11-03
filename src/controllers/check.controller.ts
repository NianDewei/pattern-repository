import { GET, route } from "awilix-express"
import { Request, Response } from "express"
import { TestService } from "../services/test.service"

@route('/check')
export class CheckController {
	constructor(private readonly testService: TestService) {}

	@GET()
	public index(_req: Request, res: Response): void {
		res.status(200).json({
			NODE_END: process.env.NODE_ENV,
			APP_ENV: process.env.APP_ENV
		})
	}

	@route('/test')
	@GET()
	public test(_req: Request, res: Response): void {
		res.send({
			time: this.testService.getTime()
		})
	}
}
