import { TestRunner } from '@lsnova/supertest/dist/test.runner';
import { HttpService } from '@lsnova/supertest/dist/http.service';


HttpService.cleanup = false;

new TestRunner(__dirname, `/src/scenarios/`)
    .run();


