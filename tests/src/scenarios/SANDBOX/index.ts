import { TestStep } from "@lsnova/supertest/dist/step/test.step"

import { expect, assert } from 'chai';
import { CreateUserToken } from "../../tasks/authorization/create-user-token/create-trade-user-token.task";

import { GetDebtorVerification } from "../../tasks/debtor-verification/read/get-debtor-verification";






const steps: TestStep<any>[] = [
    {
        task: new CreateUserToken
    },
    {
        task: new GetDebtorVerification,


        assertions(holder: any, _task: any) {
            const task = _task as GetDebtorVerification

            assert.equal(task.response?.status, 200);

            const response = task.response?.body
        }

        // { code: 'MAXIMUM_SELF_ACCEPTANCE_LIMIT', description: 'Maksymalny limit autoakceptacji' },
        // { code: 'DEFAULT_CAPACITY', description: 'Domyślna pojemność' },
        // { code: 'BLOCKED_DEBTOR_STATUS', description: 'Status dłużnika z blokadą' },
        // { code: 'FINANCIAL_DATA_VALIDITY', description: 'Ważność danych finansowych' },
        // { code: 'CURRENT_RATIO', description: 'Wskaźnik płynności bieżącej (CR)' },
        // { code: 'QUICK_RATIO', description: 'Wskaźnik płynności szybki (QR)' },
        // { code: 'IMMEDIATE_SOLVENCY_RATIO', description: 'Wskaźnik wypłacalności natychmiastowej' },
        // { code: 'RETURN_ON_SALES_RATIO', description: 'Wskaźnik rentowności ze sprzedaży' },
        // { code: 'GROSS_PROFITABILITY_RATIO', description: 'Wskaźnik rentowności brutto' },
        // { code: 'NET_PROFITABILITY_RATIO', description: 'Wskaźnik rentowności netto' },
        // { code: 'COST_LEVEL_INDEX', description: 'Wskaźnik poziomu kosztów' },
        // { code: 'RETURN_ON_ASSETS_RATIO_PCT', description: 'ROA Wskaźnik rentowności aktywów w %' },
        // { code: 'OPERATING_PROFIT_RATE_PCT', description: 'OPM Stopa zysku operacyjnego w %' },
        // { code: 'ASSETS_LIABILITIES', description: 'LA Zobowiązań do aktywów' },
        // { code: 'CAPITAL_COMMITMENTS', description: 'LE Zobowiązań do kapitału' },
        // { code: 'FINANCING_ASSETS_EQUITY_SHARE', description: 'ETA Udział kapitału własnego w finansowaniu majątku' },
        // { code: 'FINANCING_FIXED_ASSETS_EQUITY_SHARE', description: 'ETA Udział kapitału własnego w finansowaniu majątku trwałego' },
        // { code: 'INVENTORY_TURNOVER', description: 'IT Obrót zapasami w dniach' },
        // { code: 'RECEIVABLES_COLLECTION_PERIOD', description: 'CP Okres spływu należności (dni)' },
        // { code: 'COMMITMENT_PAYMENT_PERIOD_DAY', description: 'PL Okres płatności zobowiązań (dnia)' },
        // { code: 'DEBT_REPAYMENT_CAPACITY', description: 'Wskaźnik zdolności do spłaty zadłużenia' },
        // { code: 'BANKRUPTCY_RISK_SCORE', description: 'Z - Wskaźnik ryzyka upadłości' },
        // { code: 'LEGAL_EVENTS', description: 'Zdarzenia prawne' },
        // { code: 'KNF_WARNINGS', description: 'Ostrzeżenia KNF' },
        // { code: 'PAYMENT_RELIABILITY', description: 'Wiarygodność płatnicza (TRADE)/Paydex' },
        // { code: 'DEBT_EXCHANGES', description: 'Giełdy wierzytelności (giełda długów)' },
        // { code: 'DEBT_EXCHANGE_BAILIFF_EXECUTIONS', description: 'Egzekucje komornicze' },
        // { code: 'PKD_BLACKLIST', description: 'Czarna lista PKD' },
        // { code: 'RISK', description: 'Ryzyko' },
        // { code: 'SCORING', description: 'Ocena scoringowa' }
    }


    
];

export default steps;



