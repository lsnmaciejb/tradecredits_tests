import { ConfigSingleton } from '@lsnova/supertest/dist/config.singleton';
import { assert, expect } from 'chai';
import chalk from 'chalk';
import { ResourceSingleton } from '@lsnova/supertest/dist/resource.singleton';
import superagent from 'superagent';

import { RestTask } from '@lsnova/supertest/dist/task/rest.task';
import { AuthorizationSingleton } from '@lsnova/supertest/dist/authorization.singleton';
import { TradeDev } from '../../constants';

export class CreateUserToken extends RestTask<{}> {
    name: string = 'create user authorization token';

    get shouldCache(): boolean {
        return false;
    }

    constructor() {
        super(TradeDev);
    }

    supports(holder: {}): boolean {
        return true
    }

    beforeRequest(holder: {}): void {
        if (ConfigSingleton.instance().config.env == 'int') {
            this.request = ResourceSingleton.getJsonFromFile(`${__dirname}/resources/user-integ.json`);
        } else if (ConfigSingleton.instance().config.env == 'prep') {
            this.request = ResourceSingleton.getJsonFromFile(`${__dirname}/resources/user-prep.json`);
        } else {
            this.request = ResourceSingleton.getJsonFromFile(`${__dirname}/resources/user-dev.json`);
        }
    }

    afterResponse(holder: {}): void {
        this.currentTest.custom.messageList.push([`      AuthorizationSingleton: token has been ${chalk.green('assigned')}`]);
        AuthorizationSingleton.token = this.response?.body?.token;



    }

    assertions(): void {
        assert.equal(this.response?.status, 200);
        expect(this.response?.body?.token.length, 'expect token to be a string with length > 20').to.be.greaterThan(20)
    }

    ///if dev go to portainer other utils

    async process(holder: {}) {
        if (ConfigSingleton.instance().config.env == 'int' || ConfigSingleton.instance().config.env == 'prep') {
            this.response = await superagent.post(`${ConfigSingleton.instance().config.baseUrl.utils}/getTokenFromAzure`, this.request);
        } else {
            this.response = await this.http.post('/gateway/authorize/user', this.request).disableTLSCerts()
        }
    }
}

