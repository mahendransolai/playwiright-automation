import { expect } from "playwright/test";
import { test } from "../fixtures/custom-fixture";
import data from "../fixtures/data.json";


test("Test for custom test",async({ formPage, page }) => { 

  console.log("sucessfully Implemented Custom Fixture");
  console.log("First Name : ",data.fname);


 });

 test("",async({ formPage, page }) => { 
 
    const appUrl = "https://demoqa.com/automation-practice-form";

    await formPage.navigate(appUrl);
    expect(page.url()).toBe(appUrl);


 
  });