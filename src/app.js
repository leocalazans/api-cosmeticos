const fastify = require('fastify')({ logger: true });
const swagger = require('@fastify/swagger');
const fastifySwaggerUi = require('@fastify/swagger-ui');
const mongodb = require('@fastify/mongodb');
const productRoutes = require('./routes/productRoutes');
const ProductRepository = require('./repositories/ProductRepository');
const ProductService = require('./services/ProductService');
const seedProducts = require('./seed');  // Adicionar o seed

// Registre o plugin do MongoDB
fastify.register(mongodb, {
  forceClose: true,
  url: 'mongodb://localhost:27017/costmeticos'
});


// Registre o plugin Swagger para documentação
fastify.register(swagger, {
  routePrefix: '/docs',  
  swagger: {
    info: {
      title: 'API de Cosméticos',
      description: 'Documentação da API para gerenciamento de cosméticos',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true
});

fastify.register(fastifySwaggerUi, {
  routePrefix: '/docs',  // Caminho onde você pode acessar o Swagger
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  exposeRoute: true
});

fastify.after(() => {
  const db = fastify.mongo.db;
  console.log(db)
  console.log(process.env.MONGO_URL)
  
  // Verifique se a conexão está disponível
  if (!db) {
    fastify.log.error('Banco de dados MongoDB não está acessível.');
    process.exit(1);
  }

  // Decore o serviço de produtos
  fastify.decorate('productService', new ProductService(new ProductRepository(db)));
});

fastify.register(productRoutes);


// Inicialize o servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server running at http://localhost:3000`);
    // await seedProducts(fastify.mongo.db);
    fastify.swagger(); // Expor documentação do Swagger
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
