import {Page} from "@playwright/test"


export default class PracticeFormPage{

constructor(public page: Page) {}

static url = "https://demoqa.com/automation-practice-form";
static fname = "#firstName";
static lname = "#lastName";
static phoneNum = "#userNumber";

    async getappUrl(url){
        await this.page.goto(url);
    }

    async fillFirstName(name){
        await this.page.locator(PracticeFormPage.fname).fill(name);
    }

    async fillLastName(value){
        await this.page.locator(PracticeFormPage.lname).fill(value);
    }

    async fillPhoneNumber(num){
        await this.page.locator(PracticeFormPage.phoneNum).fill("1234567890");
    }

}
