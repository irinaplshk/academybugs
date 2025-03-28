import { test, expect } from '@playwright/test';
import { WebApp } from '../src/pages/webApp.page';

let webApp;

test.describe('Visual', () => {


  test('The product image fills the box entirely just like all other product images', async ({ page }) => {


    webApp = new WebApp(page);

    await webApp.mainPage.open();
    await webApp.mainPage.clickButtonClose();
    await webApp.mainPage.findBags();
    await webApp.findBagsPage.checkImage();

    await expect(webApp.findBagsPage.mistakeMessage).toBeVisible();
  })


});


test.describe('Crash', () => {


  test('The selected number of results is not desplayed ', async ({ page }) => {


    webApp = new WebApp(page);

    await webApp.mainPage.open();
    await webApp.mainPage.clickButtonClose();
    await webApp.mainPage.findBags();
    await webApp.findBagsPage.getThingsOnPage();

    await expect(page.getByRole('heading', { name: 'You found a crash bug,' })).toBeVisible();
  })
  test('The comment is not posted under the product', async ({ page }) => {
    webApp = new WebApp(page);
    await webApp.mainPage.open();
    await webApp.mainPage.clickButtonClose();
    await webApp.mainPage.findBags();
    await webApp.findBagsPage.gotoProduct();
    await webApp.productPage.addComment('test');

    
    await expect( webApp.productPage.mistakeMessage).toBeVisible({timeout:25000});

  })

});


test.describe('Functional', () => {

  test('The product quantity can not be encreased', async ({ page }) => {
    webApp = new WebApp(page);

    await webApp.mainPage.open();
    await webApp.mainPage.clickButtonClose();
    await webApp.mainPage.findBags();
    await webApp.findBagsPage.addToCart();
    await webApp.findBagsPage.gotoCart();
    await webApp.myCartPage.updateAmountToThree();
    await expect(webApp.myCartPage.mistakeMessage).toContainText('In this bug, the product quantity cannot be increased past 2.');
  })

  test('The manufacturer link does not show an appropriate page', async ({ page }) => {
    

    webApp = new WebApp(page);
    await webApp.mainPage.open();
    await webApp.mainPage.clickButtonClose();
    await webApp.mainPage.findBags();
    await webApp.findBagsPage.gotoProduct();
    await webApp.productPage.gotoProductLink();
    await expect(webApp.productPage.mistakeMessageLinkPage).toContainText('Oops! That page can’t be found.');
    
  });

  
  test('The twitter share button should show an appropriate page to share the product on Twitter', async ({ page }) => {
    

    webApp = new WebApp(page);
    await webApp.mainPage.open();
    await webApp.mainPage.clickButtonClose();
    await webApp.mainPage.findBags();
    await webApp.findBagsPage.gotoProduct();
    await webApp.productPage.gotoxPlatform();

    await expect( webApp.productPage.mistakeMessage).toBeVisible();
    
  })

  
})
