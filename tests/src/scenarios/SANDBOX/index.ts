import { TestStep } from "@lsnova/supertest/dist/step/test.step"


import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";
import { GetPolicy } from "../../tasks/tcp_policy/read/get-tcp-policy";



const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
    {
        task: new GetPolicy
    }


];

export default steps;