import { ErrorType } from '../enum/error.enum';
import { CommonErrorName } from '../enum/error-name.enum';
import { LeaderBoardException } from './exception';

export class InvalidTokenException extends LeaderBoardException {
    getCode(): number {
        return ErrorType.InvalidToken;
    }

    getName(): string {
        return CommonErrorName.InvalidToken;
    }
}
