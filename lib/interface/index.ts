import { IncomingMessage } from "node:http";

// RequestType
export type RequestType = IncomingMessage & { cookies?: object };
