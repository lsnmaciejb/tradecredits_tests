import fs from 'fs';
import select from '@inquirer/select';
import checkbox from '@inquirer/checkbox';
import { execSync, spawn } from 'node:child_process';
import { confirm, input } from '@inquirer/prompts';
import chalk from 'chalk';
import dayjs from 'dayjs';

const choices = fs.readdirSync(`${__dirname}/tests/src/scenarios`)
    .filter(scenario => fs.existsSync(`${__dirname}/tests/src/scenarios/${scenario}/index.ts`));;

(async function () {

    const params: any = {
        run: false,
        config: null,
        debug: false,
        scenarioList: [],
        responseDirectory: null,
        saveResponse: false,
        mochawesome: false,
        reportFilename: null
    }

    params.config = await select({
        message: 'Which config file you would like to use?',
        choices: [
            { name: 'dev', value: 'trade-dev.json' },
            
        ],
    });

    const allScenarios = await confirm({ message: 'Do you want to run all scenarios?', default: false });

    if (!allScenarios) {
        params.scenarioList = await checkbox({
            message: 'Which scenario would you like to run?',
            pageSize: 20,
            choices: choices.map(choice => ({ name: choice, value: choice, default: false })),
        })
    }

    if (params.scenarioList.length === 1) {
        params.responseDirectory = await confirm({ message: 'Do you wish to use cached responses?', default: false })
            ? await input({ message: 'Provide directory with responses' })
            : null;
    }

    if (!params.responseDirectory && params.scenarioList.length === 1) {
        params.saveResponse = await confirm({ message: 'Should scenario save responses?', default: false })
    }

    params.mochawesome = await confirm({ message: 'Should report in html?', default: true });

    if (params.mochawesome) {
        params.reportFilename = await confirm({ message: 'Custom html report name?', default: false })
            ? await input({ message: 'Enter custom filename' })
            : dayjs().format('YYYYMMDD_HHmmss');
    }


    params.debug = await confirm({ message: 'Show debug messages?', default: false });

    params.run = await confirm({ message: 'Run the command?', default: false });

    let command = `tsc && node ./node_modules/.bin/mocha tests/ --config=./config/${params.config} --timeout 60000`;
    if (params.scenarioList.length > 0) {
        command = command + ` --scenarios=${params.scenarioList.join(',')}`;
    }
    if (params.mochawesome) {
        command = command + ` --reporter mochawesome --reporter-options=reportFilename=${params.reportFilename},enableCode=false,autoOpen=true,charts=true`;
    }
    if (params.responseDirectory) {
        command = command + ` --cache-directory=${params.responseDirectory}`
    }
    if (params.saveResponse) {
        command = command + ` --save-response`;
    }
    if (params.debug) {
        command = command + ` --debug`;
    }


    const proc = spawn('pbcopy');
    proc.stdin.write(command);
    proc.stdin.end();
    console.log(`command "${chalk.green(command)}" copied to clipboard!`);

    if (params.run) {
        try {
            execSync(command, { stdio: 'inherit' });
        } catch (e) {
            console.log(e);
        }
    }

})();
