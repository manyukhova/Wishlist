const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

const {
  showGifts,
  getAddGiftPage,
  addGift
} = require('./controllers/giftControllers');

app.get('/', (req, res) => {
  showGifts(req, res);
});

app.get('/admin/add-gift', getAddGiftPage);

app.post('/admin/add-gift', addGift);

const gifts = ['apple', 'juice'];

app.listen(3000, () => {
  console.log('Server is running on Port 3000');
});
