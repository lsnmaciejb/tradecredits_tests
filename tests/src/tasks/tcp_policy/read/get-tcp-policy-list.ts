import { RestTask } from "@lsnova/supertest/dist/task/rest.task";
import { expect } from "chai";
import { AuthorizationSingleton } from "@lsnova/supertest/dist/authorization.singleton";
import { TradeDev } from "../../constants";



export class GetPolicyList extends RestTask<any>{

    name = 'get tcp policy list'

    constructor() {

        super(TradeDev);
    }

    supports(holder: any): boolean {
        return AuthorizationSingleton.isAuthorized()

    }

    beforeRequest(holder: any): void {
        holder.queryParams = {
        };
    }
    async process(holder: any): Promise<any> {
        this.response = await this.http.get(`/api/trade-credits/secured/policy/list`, holder.queryParams).disableTLSCerts();

    }
    assertions(holder: any): void {
        expect(this.response?.status).to.be.equal(200);
    }

    afterResponse(holder: any): void {

    }
}

