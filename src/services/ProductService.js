class ProductService {
    constructor(productRepository) {
      this.productRepository = productRepository;
    }
  
    async listProducts() {
      return await this.productRepository.findAll();
    }
  
    async searchProducts(query) {
      return await this.productRepository.findByNameOrDescription(query);
    }
  
    async addProduct(product) {
      return await this.productRepository.addProduct(product);
    }
  }
  module.exports = ProductService;
  