import { IncomingMessage } from "http";

// RequestType
export type RequestType = IncomingMessage & { cookies?: { [key: string]: string } | undefined } & { [key: string]: any };
