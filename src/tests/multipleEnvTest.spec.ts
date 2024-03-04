import{test} from "../fixtures/formFixture"

import PracticeFormPage from "../pages/practiceFormPage";
import dotenv from 'dotenv';
import ENV from "../utils/env";
import globalSetup from "../utils/globalSetUp"

// dotenv.config({
//     path:`./env/.env.qa`,
//     override: true
// })

test("Level 1 - Basic test  - Call the BASE_URL from dotenv ",async({ page }) => { 
    console.log(process.env.BASE_URL);
    console.log(process.env.userid);
    console.log(process.env.password);
    await page.goto(process.env.BASE_URL as string);

 });

 test("Level 2 - Basic test - calling from ENV",async({ page }) => { 
    console.log("This is new ENV Value : ",ENV.BASE_URL);
    console.log(ENV.userid);
    console.log(ENV.password);
   //  console.log(process.env.BASE_URL);
   //  console.log(process.env.userid);
   //  console.log(process.env.password);
    //await page.goto(ENV.BASE_URL as string);

 });
