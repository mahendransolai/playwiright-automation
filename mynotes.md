# playwright-automation

### env set for mac
- export NODE_ENV=qa // set to qa
- export ENVIRONMENT=    //set to default

### Find the current environment variable set in MAC
- echo $ENVIRONMENT  // To See what is currently set 

- import dotenv from "dotenv"
- console.log(process.env);

### logger Install

- npm install winston
- npm install moment-timezone

#### Multiple Environment RUN
- export test_env=qa; npx playwright test multipleEnvTest.spec.ts --headed
- export ENVIRONMENT=uat; npx playwright test multipleEnvTest.spec.ts --headed

