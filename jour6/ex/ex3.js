// 03 - Validator
var prompt = require('prompt');

  prompt.start();

  prompt.get([{

    name: 'email',
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    description: 'Your email',
    type: 'string',
    message: 'Email doit être au bon format',
    required: true

  }, {
    name: 'username',
    description: 'Your username',
    pattern: /^[a-zA-Z0-9\-]+$/, // /^[\b\-]$/
    message: 'Le username ne doit comporter que des lettres, chiffres et tirets (les petits)',
    type: 'string',
    required: true

  }, {
    name: 'password',
    description: 'Your password',
    type: 'string',
    // pattern: /^[A-Za-z0-9\-]]\w{6,}$/, 
    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
    message: 'le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets',
    required: true

  }], function (err, result) {

    if (err) {
      return console.log(err, "Error");
    }
      console.log("All good !");
      console.log(' Email: ' + result.email);
      console.log(' Username: ' + result.username); 
      console.log(' Password: ' + result.password); 
  });