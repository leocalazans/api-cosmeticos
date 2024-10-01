class ProductRepository {
    constructor(db) {
      this.collection = db.collection('products');
    }
  
    async findAll(limit = 40) {
      return await this.collection.find().limit(limit).toArray();
    }
  
    async findByNameOrDescription(query) {
      return await this.collection.find({
        $or: [{ name: query }, { description: { $regex: query, $options: 'i' } }]
      }).toArray();
    }
  
    async addProduct(product) {
      return await this.collection.insertOne(product);
    }
  }
  module.exports = ProductRepository;
  