import{test} from '@playwright/test';


test("test1",async({ page }) => { 

  

 });

 test.only("sample env test",async({ page }) => { 
    console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password);
 
  });