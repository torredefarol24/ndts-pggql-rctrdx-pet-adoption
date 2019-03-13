import express from 'express';

class PetAdoptionApiApp {
	public api: express.Application;

	constructor() {
		// Initialize Express App
		this.api = express();
	}
}

export default PetAdoptionApiApp