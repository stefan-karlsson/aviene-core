import { RequestContextService } from '@aviene/core';

export interface SerializedException {
  message: string;
  code: string;
  correlationId: string;
  stack?: string;
  cause?: string;
  metadata?: unknown;
}

export abstract class ExceptionBase extends Error {
  abstract code: string;

  readonly correlationId: string;

  /**
   * Creates a new exception
   *
   * @param message A human-readable error message
   * @param cause The original error that caused this exception
   * @param metadata Non-sensitive info to help with debugging
   *
   * ! Do not include sensitive data in `metadata` as it will appear in logs.
   */
  constructor(
    override readonly message: string,
    override readonly cause?: Error,
    readonly metadata?: Record<string, unknown>,
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    const ctx = RequestContextService.getContext();
    this.correlationId = ctx.requestId;
  }

  /**
   * Serializes the exception to a plain object
   *
   * Works around the issue of Error objects not being serialized
   * properly when sending plain objects to external processes.
   *
   * ! Keep in mind not to return a stack trace to user when in production.
   */
  toJSON(): SerializedException {
    return {
      message: this.message,
      code: this.code,
      stack: this.stack,
      correlationId: this.correlationId,
      cause: JSON.stringify(this.cause),
      metadata: this.metadata,
    };
  }
}
