import { Secret, SignOptions, VerifyOptions } from "jsonwebtoken";
import { RequestType } from "./lib/interface";
import { Socket } from "socket.io";

export declare type IRequest = Request | RequestType;

/**
 * @method setTokenName Set token name which is gotten in cookie of header in request
 * @param tokenName string
 */
export declare function setTokenName(tokenName: string): void;

/**
 * @method authenticateUser Return payload if token is valid, otherwise return undefined
 * @param token string | undefined
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
export declare function authenticateUser(token: string | undefined, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined;

/**
 * @method createToken Return an encoded token if the function is not error, otherwise return undefined
 * @param payload string | object | Buffer | undefined
 * @param jwtKey Secret
 * @param option SignOptions | undefined
 * @returns string | undefined
 */
export declare function createToken(payload: string | object | Buffer | undefined, jwtKey: Secret, options?: SignOptions | undefined): string | undefined;

/**
 * @method authenticateUserFromReq Return payload if token is valid, otherwise return undefined
 * @param req IRequest
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
export declare function authenticateUserFromReq(req: IRequest, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined;

/**
 * @method authenticateUserFromSocket
 * @param socket Socket
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
export declare function authenticateUserFromSocket(socket: Socket, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined;
