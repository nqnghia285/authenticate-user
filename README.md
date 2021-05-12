# Authenticate User [![Build Status](https://github.com/Links2004/arduinoWebSockets/workflows/CI/badge.svg?branch=master)](https://github.com/nqnghia285/authenticate-user.git)

Authenticate User help us verify json web token cookie to authenticate user.

### Functions:

```typescript
/**
 * @method setTokenName Set token name which is gotten in cookie of header in request
 * @param tokenName string
 */
function setTokenName(tokenName: string): void;
```

```typescript
/**
 * @method authenticateUser Return payload if token is valid, otherwise return undefined
 * @param token string
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
function authenticateUser(token: string, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined;
```

```typescript
/**
 * @method createToken Return an encoded token if the function is not error, otherwise return undefined
 * @param payload string | object | Buffer
 * @param jwtKey Secret
 * @param option SignOptions | undefined
 * @returns string | undefined
 */
function createToken(payload: string | object | Buffer, jwtKey: Secret, options?: SignOptions | undefined): string | undefined;
```

```typescript
/**
 * @method authenticateUserFromReq Return payload if token is valid, otherwise return undefined
 * @param req Request | RequestType
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
function authenticateUserFromReq(req: Request | RequestType, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined;
```

```typescript
/**
 * @method authenticateUserFromSocket
 * @param socket
 * @param jwtKey Secret
 * @param options VerifyOptions | undefined
 * @returns string | object | undefined
 */
function authenticateUserFromSocket(socket: Socket, jwtKey: Secret, options?: VerifyOptions | undefined): string | object | undefined;
```
