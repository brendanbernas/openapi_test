const express = require('express')
const app = express()
const routes = require('./routes');
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())

//add routes to express app
routes(app);

//start Express server on defined port
app.listen(port);

//log to console to let us know it's working
console.log('Test API server started on: ' + port);
