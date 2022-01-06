var prompt = require('prompt');

var schema = {
  properties: {
    email: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Email doit être au bon format',
      required: true
    },
    username: {
      pattern: /^[a-zA-Z0-9\-]+$/,
      message: 'Le username ne doit comporter que des lettres, chiffres et tirets (les petits)',
      required: true
    },
    password: {
      pattern: /^[a-zA-Z0-9\-]+$/,
      message: 'le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets',
      hidden: true
    }
  }
}
  prompt.start();

  prompt.get(schema, [ 'email', 'username', 'password'], 
  function (err, result) {

    if (err) {
      return console.log(err, "Error");
    }
      console.log('All good !');
      console.log('  email: ' + result.email);
      console.log('  username: ' + result.username); 
      console.log('  password: ' + result.password); 
      console.log('All good !');
  });