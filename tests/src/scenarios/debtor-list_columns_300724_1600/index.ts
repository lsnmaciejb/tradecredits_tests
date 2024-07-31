import { TestStep } from "@lsnova/supertest/dist/step/test.step"


import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";


import { GetDebtorList } from "../../tasks/debtor/read/get-debtor-list";



const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
    {
        task: new GetDebtorList,

        name: 'order by contractSigningDate desc',
        beforeRequest(holder: any, _task): void {
            holder.queryParams = {
                orderBy: 'contractSigningDate',
                orderDirection: 'desc',
                limit: 10,
                offset: 0
            };
        }


    }


];

export default steps;