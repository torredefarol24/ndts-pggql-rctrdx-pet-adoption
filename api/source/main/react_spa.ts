import express, { Request, Response } from 'express';
import path from 'path';

class ReactSPA {
	public app: express.Application;
	constructor() {
		this.app = express();
		this.setupStaticServing(this.app);
		this.serveReactSPA(this.app);
	}

	private setupStaticServing(app: any) {
		const staticPath = path.join(__dirname, "../public");
		app.use(express.static(staticPath));
	}

	private serveReactSPA(app: any) {
		app.get('/#/', (request: Request, response: Response) => {
			const reactFilePath = path.join(__dirname, "../public/index.html");
			return response.sendFile(reactFilePath);
		})

		app.get("*", (request: Request, response: Response) => {
			return response.redirect("/#/");
		})
	}
}

export default ReactSPA;