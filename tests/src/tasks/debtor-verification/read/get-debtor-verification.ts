import { RestTask } from "@lsnova/supertest/dist/task/rest.task";
import { expect } from "chai";
import { AuthorizationSingleton } from "@lsnova/supertest/dist/authorization.singleton";
import { TradeDev } from "../../constants";



export class GetDebtorVerification extends RestTask<any>{

    name = 'get DEBTOR VERIFICATION'

    constructor() {

        super(TradeDev);
    }

    supports(holder: any): boolean {
        return AuthorizationSingleton.isAuthorized()

    }

    beforeRequest(holder: any): void {

    }
    async process(holder: any): Promise<any> {
        this.response = await this.http.get(`/api/trade-credits/secured/parameter/DEBTOR_VERIFICATION`, holder.queryParams).disableTLSCerts();

    }
    assertions(holder: any): void {
        expect(this.response?.status).to.be.equal(200);
    }

    afterResponse(holder: any): void {

    }
}

