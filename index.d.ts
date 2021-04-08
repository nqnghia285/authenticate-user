/// <reference path="lib/interface/index.ts" />
/// <reference types="jsonwebtoken" />
/// <reference types="socket.io" />

import { SignOptions } from 'jsonwebtoken';
import { RequestType, UserInfo } from './lib/interface';
import { Socket } from 'socket.io';

/**
 * @method authenticateUser: Return payload if token is valid, otherwise return undefined
 * @param token
 * @returns UserInfo | undefined
 */
export function authenticateUser(token: string): UserInfo | undefined;

/**
 * @method createToken: Return an encoded token if the function is not error, otherwise return undefined
 * @param payload
 * @param option
 * @returns string | undefined
 */
export function createToken(payload: string | object | Buffer, option?: SignOptions | undefined): string | undefined;

/**
 * @method authenticateUserFromReq: Return payload if token is valid, otherwise return undefined
 * @param req
 * @returns UserInfo | undefined
 */
export function authenticateUserFromReq(req: Request | RequestType): UserInfo | undefined;

/**
 * @method authenticateUserFromSocket
 * @param socket
 * @returns UserInfo | undefined
 */
export function authenticateUserFromSocket(socket: Socket): UserInfo | undefined;
