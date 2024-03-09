import{test} from '@playwright/test';
import dotenv from "dotenv";
import ENV from '../utils/env';


test("test1",async({ page }) => { 

  

 });

 test("sample env test",async({ page }) => { 
    //dotenv.config()
    console.log(ENV.BASE_URL);
    // console.log(process.env.userid);
    // console.log(process.env.password);
    // //console.log(process.env.qa);
 
  });