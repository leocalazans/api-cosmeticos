const ProductRepository = require('./repositories/ProductRepository');
const Product = require('./entities/Product');

async function seedProducts(db) {
  const productRepository = new ProductRepository(db);

  // Verifica se já existem produtos no banco
  const existingProducts = await productRepository.findAll();
  if (existingProducts.length > 0) {
    console.log('Produtos já existem no banco de dados.');
    return;
  }

  // Lista de 40 produtos para inserir
  const products = Array.from({ length: 40 }, (v, i) => {
    return new Product(
      `Produto ${i + 1}`,
      `Descrição do Produto ${i + 1}`,
      (Math.random() * 100).toFixed(2)
    );
  });

  // Inserindo todos os produtos
  for (const product of products) {
    await productRepository.addProduct(product);
  }

  console.log('40 produtos de demonstração foram inseridos.');
}

module.exports = seedProducts;
