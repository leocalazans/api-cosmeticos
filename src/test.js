const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/cosmeticos'; // Ajuste conforme necessário

const testConnection = async () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
  } finally {
    await client.close();
  }
};

testConnection();
