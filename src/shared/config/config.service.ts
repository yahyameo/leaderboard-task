import { Injectable } from '@nestjs/common';
import { config } from 'src/config/config';

@Injectable()
export class ConfigService {

    get jwtConfig() {
        return { privateKey: config.jwtPrivateKey };
    }
}
