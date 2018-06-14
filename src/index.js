import express from 'express';
import setFakeData from './setFakeData';

const app = express();

app.use(express.static( 'public' ));

app.get('/', function(req, res) {
  res.sendFile('/public/index.html', { root: '.' })
});

app.get('/data', function (req, res) {

  const schema = {
    name: '{{string,5}}',
    age: '{{int,20,30}}',
  };

  res.json( setFakeData( schema, 30 ) );
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
