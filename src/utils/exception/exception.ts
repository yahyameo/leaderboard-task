import { ExceptionErrorType } from '../enum/exception-error.enum';
import { ErrorType } from '../enum/error.enum';
import { BaseException } from './base.exception';

export abstract class LeaderBoardException extends BaseException {
    getNamespace(): string {
        return 'bidding';
    }

    getType(): ExceptionErrorType {
        return ExceptionErrorType.Exception;
    }

    getCode(): number {
        return ErrorType.SomethingWentWrong;
    }
}
