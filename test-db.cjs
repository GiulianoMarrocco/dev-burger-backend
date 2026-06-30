const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'admin',
  password: '123456',
  database: 'dev-burger-db',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão OK');
  } catch (error) {
    console.error(error);
  }
})();