import { TestStep } from "@lsnova/supertest/dist/step/test.step"

import { expect } from "chai";
import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";

import { GetPolicyList } from "../../tasks/policy/read/get-policy-list";



const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
    {
        task: new GetPolicyList,

        name: 'order by Numer polisy desc',
        beforeRequest(holder: any, _task): void {
            holder.queryParams = {
                orderBy: 'policyNumber',
                orderDirection: 'desc',
                limit: 10,
                offset: 0
            };
        }
    },
    {
        task: new GetPolicyList,

        name: 'order by Numer polisy asc',
        beforeRequest(holder: any, _task): void {
            holder.queryParams = {
                orderBy: 'policyNumber',
                orderDirection: 'asc',
                limit: 10,
                offset: 0
            };
        }
    },
    {
        task: new GetPolicyList,

        name: 'order by Numer polisy asc',
        beforeRequest(holder: any, _task): void {
            holder.queryParams = {
                orderBy: 'policyNumber',
                orderDirection: 'asc',
                limit: 10,
                offset: 0
            };
        }
    }


];

export default steps;