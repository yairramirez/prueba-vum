import * as functions from 'firebase-functions';

exports.add = functions.https.onRequest((req, res) => {
  res.send('HOLA MUNDO');
});
