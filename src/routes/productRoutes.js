const ProductController = require('../controllers/ProductController');

async function productRoutes(fastify, options) {
  const productController = new ProductController(fastify.productService);

  fastify.get('/products', productController.listProducts.bind(productController));
  fastify.get('/products/search/:query', productController.searchProducts.bind(productController));
  fastify.post('/products', productController.addProduct.bind(productController));
}

module.exports = productRoutes;
