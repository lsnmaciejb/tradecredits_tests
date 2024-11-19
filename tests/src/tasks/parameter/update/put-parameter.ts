import { RestTask } from "@lsnova/supertest/dist/task/rest.task";
import { AuthorizationSingleton } from "@lsnova/supertest/dist/authorization.singleton";
import { TradeDev } from "../../constants";
import { ResourceSingleton } from "@lsnova/supertest/dist/resource.singleton";
import { expect } from "chai";




export class PutParameter extends RestTask<any>{

    name = 'put parameter'

    constructor(private requestJsonPath: string = `${__dirname}/resources/parameter.json`) {
        super(TradeDev);
        this.request = ResourceSingleton.getJsonFromFile(this.requestJsonPath);

    }

    supports(holder: any): boolean {
        return AuthorizationSingleton.isAuthorized()

    }

    beforeRequest(holder: any): void {

    }
    async process(holder: any): Promise<any> {
        this.response = await this.http.put(`api/trade-credits/secured/parameter`, holder.queryParams).disableTLSCerts();

    }
    assertions(holder: any): void {
        //expect(this.response?.status).to.be.equal(200);
    }

    afterResponse(holder: any): void {

    }
}

