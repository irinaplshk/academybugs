export class ProductPage {
    constructor(page) {
        this.page = page;
        this.commentBox = page.getByRole('textbox', { name: 'Comment' });
        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' });
        this.productLink       =page.getByRole('link', { name: 'DNK' });
        this.xPlatformLink =  page.getByRole('link', { name: 'X', exact: true })

    }

    async addComment(text) {
        await this.commentBox.click();
        await this.commentBox.fill(text);;
        await this.postCommentButton.click();
       

    }
    async gotoProductLink() {
        await this.productLink.click();
        
    }
    async gotoxPlatform() {
        await this.xPlatformLink.click();
        
    }
}