const fs = require('fs');
const path = require('path');

module.exports = class Gift {
  constructor(name) {
    this.name = name;
  }

  static addGift(giftName) {
    const dataPath = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'gifts.json'
    );

    fs.readFile(dataPath, (error, fileContent) => {
      let gifts = [];
      if (!error) {
        gifts = JSON.parse(fileContent);
      }

      gifts.push(giftName);

      fs.writeFile(dataPath, JSON.stringify(gifts), err => console.log(err));
    });
  }

  static getDataGifts() {
    const dataPath = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'gifts.json'
    );

    return JSON.parse(
      fs.readFileSync(dataPath, (error, fileContent) => {
        if (error) {
          return [];
        }
        return fileContent;
      })
    );
  }
};
