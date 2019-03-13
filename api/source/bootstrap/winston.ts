import { format, transports, createLogger, addColors, LoggerOptions } from "winston";
import path from "path";

//Create Log Formats
const LogMsgFormat = format.printf(
	(info: any) => `${info.timestamp} [${info.level}] : ${info.message}`
);
const LogTimeFormat = format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" });
const LogColorFormat = format.colorize({ all: true });

//Setup Logging Formats
const LogOpts = {
	console: {
		handleExceptions: true,
		format: format.combine(LogTimeFormat, LogColorFormat, LogMsgFormat)
	},
	fileDebug: {
		level: "info",
		filename: path.join(__dirname + '../../../logs/debug.log'),
		format: format.combine(LogTimeFormat, LogMsgFormat)
	},
	fileError: {
		level: "error",
		filename: path.join(__dirname + '../../../logs/error.log'),
		format: format.combine(LogTimeFormat, LogMsgFormat)
	},
	fileApplicationError: {
		level: "application_error",
		filename: path.join(__dirname + '../../../logs/application_error.log'),
		format: format.combine(LogTimeFormat, LogMsgFormat)
	},
	fileClientError: {
		level: "client_error",
		filename: path.join(__dirname + '../../../logs/client_error.log'),
		format: format.combine(LogTimeFormat, LogMsgFormat)
	}
};

// Create Custom Log Levels
const CustLogLevels = {
	levels: {
		error: 0,
		application_error: 1,
		client_error: 2,
		warn: 3,
		info: 3,
		verbose: 4,
		debug: 5,
		silly: 6
	},
	colors: {
		error: 'red',
		application_error: "magenta",
		client_error: "cyan",
		warn: "orange",
		info: "green",
		verbose: "cyan",
		debug: "gray",
		silly: "gray"
	}
}

//Setup Logger Options
const loggerOpts: LoggerOptions = {
	levels: CustLogLevels.levels,
	transports: [
		new transports.Console(LogOpts.console),
		new transports.File(LogOpts.fileApplicationError),
		new transports.File(LogOpts.fileClientError),
		new transports.File(LogOpts.fileError),
		new transports.File(LogOpts.fileDebug)
	],
	exitOnError: false
}

// Create Logger
const colorsAdded = addColors(CustLogLevels.colors);
const logger = createLogger(loggerOpts);
export default logger;