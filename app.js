export default function(express, bodyParser, createReadStream, crypto, http) {
    const app = express();
    const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Accept'
      };
.get('/f', r => r
.res.format({
'text/html': () => r.res.send(`<h2>Результат 42</h2>`),
'application/json': () => r.res.json({"Результат:": 42})
})
)
