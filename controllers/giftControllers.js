const Gift = require('../models/gift');

exports.showGifts = (req, res) => {
  const dataGifts = Gift.getDataGifts();

  res.render('index', { gifts: dataGifts });
};

exports.addGift = (req, res) => {
  const gift = new Gift(req.body.title);
  Gift.addGift(gift);
  res.redirect('/');
};

exports.getAddGiftPage = (req, res) => {
  res.render('add-gift', {
    path: '/admin/add-gift'
  });
};
