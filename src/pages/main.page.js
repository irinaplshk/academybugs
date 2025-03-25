
import { BasePage } from './base.page';
 
export class MainPage extends BasePage {
 
    constructor(page) {
        super(page);
    
    this.findBagsLink = page.getByRole('link', { name: 'Find Bugs' });
    this.closeStart   = page.locator(`div[id='TourTip0'] button[type='button']`);


  }
  async findBags() {
    await this.findBagsLink.click();
    
  }
  async clickButtonClose() {
    await this.closeStart.click();
  }

}
