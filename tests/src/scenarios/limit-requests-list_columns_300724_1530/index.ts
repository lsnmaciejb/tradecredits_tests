import { TestStep } from "@lsnova/supertest/dist/step/test.step"


import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";

import { GetLimitRequestList } from "../../tasks/limit/read/get-limit-request-list";



const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
    {
        task: new GetLimitRequestList,

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