export class Exception extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Exception";
  }
}

export class AuthException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthException";
  }
}

export class ProductException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProductException";
  }
}
