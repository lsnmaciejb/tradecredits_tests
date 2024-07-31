import { TestStep } from "@lsnova/supertest/dist/step/test.step"


import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";

import { GetDebtorVerification } from "../../tasks/debtor-verification/read/get-debtor-verification";






const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
    {
        task: new GetDebtorVerification

    }


];

export default steps;