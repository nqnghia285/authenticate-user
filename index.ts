import { Request } from "express";
import { Secret, sign, SignOptions, verify, VerifyOptions } from "jsonwebtoken";
import { Socket } from "socket.io";
import { RequestType } from "./lib/interface";

let _tokenName = "token";

/**
 * @method setTokenName Set token name which is gotten in cookie of header in request
 * @param tokenName string
 */
export function setTokenName(tokenName: string): void {
    _tokenName = tokenName;
}

/**
 * @method authenticateUser Return payload if token is valid, otherwise return undefined
 * @param token string
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
export function authenticateUser(token: string, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined {
    try {
        return verify(token, jwtKey, options);
    } catch (error) {
        console.log("Error: ", error);
        return undefined;
    }
}

/**
 * @method createToken Return an encoded token if the function is not error, otherwise return undefined
 * @param payload string | object | Buffer
 * @param jwtKey Secret
 * @param option SignOptions | undefined
 * @returns string | undefined
 */
export function createToken(payload: string | object | Buffer, jwtKey: Secret, options?: SignOptions | undefined): string | undefined {
    try {
        return sign(payload, jwtKey, options);
    } catch (error) {
        console.log("Error: ", error);
        return undefined;
    }
}

/**
 * @method authenticateUserFromReq Return payload if token is valid, otherwise return undefined
 * @param req Request | RequestType
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
export function authenticateUserFromReq(req: Request | RequestType, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined {
    let userToken: string = req?.cookies[_tokenName];
    return authenticateUser(userToken, jwtKey, options);
}

/**
 * @method authenticateUserFromSocket
 * @param socket
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
export function authenticateUserFromSocket(socket: Socket, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined {
    const req: RequestType = socket.request;
    return authenticateUserFromReq(req, jwtKey, options);
}
