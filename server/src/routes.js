const AuthenticationController = require('./controllers/AuthenticationController')
const ContactController = require('./controllers/ContactController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/contact',
    ContactController.contact)
}
