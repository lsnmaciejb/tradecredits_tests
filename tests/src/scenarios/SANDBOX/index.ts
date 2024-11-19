import { TestStep } from "@lsnova/supertest/dist/step/test.step"

import { expect, assert } from 'chai';
import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";

import { GetDebtorVerification } from "../../tasks/parameter/read/get-debtor-verification";
import { PutParameter } from "../../tasks/parameter/update/put-parameter";






const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
   {
        task: new PutParameter,

        name: 'parameter pupupu',

        beforeRequest(holder: any, _task: any) {
            const task = _task as PutParameter

            ///ustaw 'Maksymalny limit autoakceptacji':
            task.request.valueRequest[0].value = null



        },
        
   },

];

export default steps;



