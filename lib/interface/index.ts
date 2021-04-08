import { IncomingMessage } from 'node:http';

// UserInfo
export interface UserInfo {
  userId?: number;
  fullName?: string;
  email?: string;
  role?: string;
  mcuId: number;
}

interface CustomerType {
  cookies?: object;
}

// RequestType
export type RequestType = IncomingMessage & CustomerType;
