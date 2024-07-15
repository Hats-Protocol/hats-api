export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export class TransactionNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TransactionNotFoundError";
  }
}

export class SubgraphSyncError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SubgraphSyncError";
  }
}

export class InvalidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidationError";
  }
}
