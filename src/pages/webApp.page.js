import { MainPage ,FindBagsPage,MyCartPage,ProductPage} from './index';

export class WebApp {
 
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(page);
        this.findBagsPage = new FindBagsPage(page);
        this.myCartPage = new MyCartPage(page);
        this.productPage = new ProductPage(page);

    }

}

