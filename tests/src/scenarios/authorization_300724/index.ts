import { TestStep } from "@lsnova/supertest/dist/step/test.step"
import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";




const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
];

export default steps;