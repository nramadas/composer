import { ApolloError } from 'apollo-server-errors';

import { ErrorType } from '#lib/errors';

export class AlreadyAssigned extends ApolloError {
  constructor(field: string, value: string) {
    super(ErrorType.AlreadyAssigned, ErrorType.AlreadyAssigned, {
      field,
      value,
    });
  }
}

export class AlreadyTaken extends ApolloError {
  constructor(field: string, value: any) {
    super(ErrorType.AlreadyTaken, ErrorType.AlreadyTaken, {
      field,
      value,
    });
  }
}

export class CouldNotDelete extends ApolloError {
  constructor(entityName: string) {
    super(ErrorType.CouldNotDelete, ErrorType.CouldNotDelete, {
      entityName,
    });
  }
}

export class DoesNotExist extends ApolloError {
  constructor(field: string, reference: any) {
    super(ErrorType.DoesNotExist, ErrorType.DoesNotExist, {
      field,
      reference,
    });
  }
}

export class DoesNotMatch extends ApolloError {
  constructor(...fields: string[]) {
    super(ErrorType.DoesNotMatch, ErrorType.DoesNotMatch, {
      fields,
    });
  }
}

export class Expired extends ApolloError {
  constructor(field: string) {
    super(ErrorType.Expired, ErrorType.Expired, {
      field,
    });
  }
}

export class FailedFileParse extends ApolloError {
  constructor(filename: string) {
    super(ErrorType.FailedFileParse, ErrorType.FailedFileParse, {
      filename,
    });
  }
}

export class FailedUpload extends ApolloError {
  constructor(filename: string) {
    super(ErrorType.FailedUpload, ErrorType.FailedUpload, {
      filename,
    });
  }
}

export class FileTypeNotAllowed extends ApolloError {
  constructor(ext?: string) {
    super(ErrorType.FileTypeNotAllowed, ErrorType.FileTypeNotAllowed, {
      ext: ext || 'indeterminate extension',
    });
  }
}

export class Insecure extends ApolloError {
  constructor(field: string, value: any) {
    super(ErrorType.Insecure, ErrorType.Insecure, {
      field,
      value,
    });
  }
}

export class InvalidFormat extends ApolloError {
  constructor(field: string, value: any) {
    super(ErrorType.InvalidFormat, ErrorType.InvalidFormat, {
      field,
      value,
    });
  }
}

export class Required extends ApolloError {
  constructor(field: string) {
    super(ErrorType.Required, ErrorType.Required, {
      field,
    });
  }
}

export class SomethingElse extends ApolloError {
  constructor() {
    super(ErrorType.SomethingElse, ErrorType.SomethingElse);
  }
}

export class Unauthorized extends ApolloError {
  constructor() {
    super(ErrorType.Unauthorized, ErrorType.Unauthorized);
  }
}
