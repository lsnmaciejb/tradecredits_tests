import { TestStep } from "@lsnova/supertest/dist/step/test.step"


import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";

import { GetLimitListRequests } from "../../tasks/tcp_limit/read/get-tcp-limit-list-requests";



const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
    {
        task: new GetLimitListRequests,

        name: 'order by Id desc',
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