export default function(express, bodyParser, createReadStream, crypto, http) {
    const app = express();
    const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Accept'
      };
      const login = '\u03bb'+'\u0041';
      app
      .all('/*', (req, res) => {
          res.set(CORS);
          res.send(login);
          })
    return app;
}

