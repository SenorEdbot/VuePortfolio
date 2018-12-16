const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./models')
const PORT = process.env.PORT || 8081;
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(express.static('client/dist'));
app.use(cors())

require('./routes')(app)

const syncOptions = {force: false};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions)
  .then(() => {
    app.listen(PORT, () => {
      console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
    })
  })
