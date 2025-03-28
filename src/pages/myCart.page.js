export class MyCartPage {
    constructor(page) {
        this.page = page;
       //this.addAmountButton = page.locator('#ec_cartitem_updating_1912632').getByRole('button', { name: '+' });
        this.addAmountButton  =  page.locator('.ec_plus_column .ec_plus');
        this.updateButton =    page.getByText('UPDATE');
        this.updateIcon   = page.locator('.ec_cartitem_updating')

    }

    async updateAmountToThree() {
        await this.addAmountButton.click();
        await this.addAmountButton.click();
        await this.updateButton.click();
        await this.updateIcon.click();

    }
}