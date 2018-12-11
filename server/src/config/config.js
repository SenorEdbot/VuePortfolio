const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vuePortfolio',
    user: process.env.DB_USER || 'vuePortfolio',
    password: process.env.DB_PASS || 'vuePortfolio',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../vuePortfolio.sqlite'),
      operatorsAliases: false
    }
  }
}
