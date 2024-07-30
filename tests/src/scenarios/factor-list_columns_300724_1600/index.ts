import { TestStep } from "@lsnova/supertest/dist/step/test.step"


import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";
import { GetFactorList } from "../../tasks/tcp_factor/read/get-tcp-factor-list";






const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
    {
        task: new GetFactorList,

        name: 'order by contractSigningDate desc',
        beforeRequest(holder: any, _task): void {
            holder.queryParams = {
                orderBy: 'id',
                orderDirection: 'desc',
                limit: 10,
                offset: 0
            };
        }


    }


];

export default steps;