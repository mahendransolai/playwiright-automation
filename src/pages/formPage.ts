import { Page } from "@playwright/test";

export default class FormPage{

    
constructor(public page: Page) {}

async navigate(url){
    await this.page.goto(url);
}

}