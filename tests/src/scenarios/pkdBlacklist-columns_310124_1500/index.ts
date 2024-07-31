import { TestStep } from "@lsnova/supertest/dist/step/test.step"


import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";

import { GetPkdBlacklist } from "../../tasks/pkdBlacklist/read/get-pkdBlackList";






const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
    {
        task: new GetPkdBlacklist

    }


];

export default steps;