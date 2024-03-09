import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    reporter: "html",
    timeout: 30000,
    testDir: './src/tests',
    globalSetup: "src/utils/globalSetUp.ts",
    use: {
        headless: false,
        screenshot: "off",
        video: "off"
    }

}

export default config;