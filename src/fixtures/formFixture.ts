import{test as base} from "@playwright/test"
import PracticeFormPage from "../pages/practiceFormPage"

type formPages = {
    practiceformPage: PracticeFormPage;
}

export const test = base.extend<formPages>({

    practiceformPage : async({page}, use) => {
        const practiceformPage = new PracticeFormPage(page);    
        await practiceformPage.getappUrl(PracticeFormPage.url);
        await practiceformPage.fillFirstName("QA");
        await practiceformPage.fillLastName("Test");
        await practiceformPage.fillPhoneNumber("1234567890");

        await use(practiceformPage);
    }

})