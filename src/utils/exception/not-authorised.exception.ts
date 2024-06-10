import { ErrorType } from '../enum/error.enum';
import { CommonErrorName } from '../enum/error-name.enum';
import { LeaderBoardException } from './exception';

export class NotAuthorisedException extends LeaderBoardException {
    getCode(): number {
        return ErrorType.NotAuthorised;
    }

    getName(): string {
        return CommonErrorName.NotAuthorised;
    }
}
