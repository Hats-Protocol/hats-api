import { createLogger, format, transports } from "winston";

const { combine, timestamp, prettyPrint, json } = format;

const log = createLogger({
  transports: [new transports.Console()],
  format: combine(json(), timestamp() /* prettyPrint() */),
});

export default log;
