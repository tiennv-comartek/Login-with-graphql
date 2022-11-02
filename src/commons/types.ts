import { typeLanguage } from '@modules/Auth/redux/action-types';

enum ErrorCodes {
  GRAPHQL_PARSE_FAILED,
  GRAPHQL_VALIDATION_FAILED,
  UNAUTHENTICATED,
  FORBIDDEN,
  BAD_USER_INPUT,
}

export class AppError extends Error {
  code?: ErrorCodes;
  constructor(message: string, code?: ErrorCodes) {
    super(message);
    this.code = code;
  }
}

export const Languages = [
  {
    key: typeLanguage.NOR,
    name: 'Norwegian',
  },
  {
    key: typeLanguage.EN,
    name: 'English',
  },
  {
    key: typeLanguage.VI,
    name: 'Vietnamese',
  },
];
