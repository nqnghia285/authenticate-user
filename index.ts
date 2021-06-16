import { Request } from "express";
import { Secret, sign, SignOptions, verify, VerifyOptions } from "jsonwebtoken";
import { Socket } from "socket.io";
import { RequestType } from "./lib/interface";

let _tokenName = "token";

export type IRequest = Request | RequestType;

/**
 * @method setTokenName Set token name which is gotten in cookie of header in request
 * @param tokenName string
 */
export function setTokenName(tokenName: string): void {
	_tokenName = tokenName;
}

/**
 * @method authenticateUser Return payload if token is valid, otherwise return undefined
 * @param token string | undefined
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
export function authenticateUser(token: string | undefined, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined {
	try {
		if (token) {
			return verify(token, jwtKey, options);
		} else {
			return undefined;
		}
	} catch (error) {
		console.log("Error: ", error);
		return undefined;
	}
}

/**
 * @method createToken Return an encoded token if the function is not error, otherwise return undefined
 * @param payload string | object | Buffer | undefined
 * @param jwtKey Secret
 * @param option SignOptions | undefined
 * @returns string | undefined
 */
export function createToken(payload: string | object | Buffer | undefined, jwtKey: Secret, options?: SignOptions | undefined): string | undefined {
	try {
		if (payload) {
			return sign(payload, jwtKey, options);
		} else {
			return undefined;
		}
	} catch (error) {
		console.log("Error: ", error);
		return undefined;
	}
}

/**
 * @method authenticateUserFromReq Return payload if token is valid, otherwise return undefined
 * @param req IRequest
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
export function authenticateUserFromReq(req: IRequest, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined {
	let userToken: string | undefined = req.cookies?.[_tokenName];
	return authenticateUser(userToken, jwtKey, options);
}

/**
 * @method authenticateUserFromSocket
 * @param socket Socket
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
export function authenticateUserFromSocket(socket: Socket, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined {
	const req: IRequest = socket.request;
	return authenticateUserFromReq(req, jwtKey, options);
}
