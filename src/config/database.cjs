module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: '123456',
    database: 'dev-burger-db',
    define: {
        timestamps: true, // data de criação e atualização
        underscored: true,
        underscoredAll: true // nome, email, telefone, data_criação, data_atualização
    }
};