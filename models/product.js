class product {
    constructor(productName,productPrice,categoryId) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.categoryId = categoryId;
    }
    getProductName() { return this.productName; }
    setProductName() { this.productName = productName; }
    getProductPrice() { return this.productPrice; }
    setProductPrice() { this.productPrice = this.productPrice }
    getCategoryId() { return this.categoryId }
    setCategoryId() { this.categoryId = this.categoryId }

}