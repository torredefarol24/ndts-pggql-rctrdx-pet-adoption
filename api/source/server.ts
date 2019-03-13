import PetAdoptionApiApp from './main/api';
import PetAdoptionReactSPA from './main/react_spa';
import logger from './bootstrap/winston';
import path from 'path';
import dotenv from 'dotenv';

// Setup ENV
const envSetup = dotenv.config({
	path: path.join(__dirname, "../.env")
});

// Instantiate API 
const backend = new PetAdoptionApiApp()
const apiPort = process.env.API_PORT
const apiListenCB = () => logger.info(`API Listening on port:${apiPort}`);

// Instantiate Frontend Host
const frontend = new PetAdoptionReactSPA()
const frontPort = process.env.FRONTEND_PORT
const frontendListenCB = () => logger.info(`SPA served on port:${frontPort}`);

//Start API Server & Frontend Host
const server = backend.api.listen(apiPort, apiListenCB);
const client = frontend.app.listen(frontPort, frontendListenCB);