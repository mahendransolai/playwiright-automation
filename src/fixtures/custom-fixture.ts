//extend the exsiting test method
//return our require pageObject (formPage)
//page
//export

import{ test as base } from "@playwright/test"
import FormPage from "../pages/formPage";

type UIPages = {
    formPage:FormPage;
}

export const test = base.extend<UIPages>({
    formPage: async({page}, use)=>{
        const formPage = new FormPage(page);
        await use(formPage)
    }

});