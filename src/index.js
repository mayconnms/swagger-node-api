const app = require('express')();
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

let port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
    console.log('Server is running on port ' + port)
})

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./endpoints.js')(app)