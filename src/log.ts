import { createLogger, format, transports } from "winston";

const { combine, timestamp, prettyPrint, json } = format;

const log = createLogger({
  transports: [new transports.Console()],
  format: json(),
});

export default log;
