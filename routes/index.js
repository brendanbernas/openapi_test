'use strict';

// export by default
module.exports = function (app) {

  var hello = require('../controllers/hello.js');
  app.route('/').get(function (req, res, next) {
    res.send('Hello, world!');
  });

  app.route('/greet/:user')
    .get(hello.greetUser);

  app.route('/greet')
    .get(hello.greetWorld);

}