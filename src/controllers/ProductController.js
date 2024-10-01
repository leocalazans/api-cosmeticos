class ProductController {
    constructor(productService) {
      this.productService = productService;
    }
  
    async listProducts(req, reply) {
      const products = await this.productService.listProducts();
      return reply.send(products);
    }
  
    async searchProducts(req, reply) {
      const { query } = req.params;
      const products = await this.productService.searchProducts(query);
      return reply.send(products);
    }
  
    async addProduct(req, reply) {
      const product = req.body;
      await this.productService.addProduct(product);
      return reply.code(201).send({ message: 'Product added successfully' });
    }
  }
  module.exports = ProductController;
  