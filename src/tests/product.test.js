const app = require('../app');
const supertest = require('supertest');

describe('Product API', () => {
  it('should list 40 products', async () => {
    const response = await supertest(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(40);
  });

  it('should search products by name or description', async () => {
    const response = await supertest(app).get('/products/search/some-product');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should add a new product', async () => {
    const response = await supertest(app)
      .post('/products')
      .send({ name: 'New Product', description: 'A great product', price: 99.99 });
    expect(response.status).toBe(201);
  });
});
