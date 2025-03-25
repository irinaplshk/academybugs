import { test } from '@playwright/test';

export class BasePage {
 
    constructor(page) {
        this.page = page;
 
    }
 
    async open() {
        await test.step("Open site", async () => {
            await this.page.goto('');
        });
    }
 
}