// name: STRING,
// count: INTEGER,
// location: STRING,
// purchase_price: DOUBLE,
// supplier: STRING,
// bar_code: STRING,
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('depotitems', [
    {
      name: '360手机',
      purchase_price: (Math.random() * 200).toFixed(2),
      count: parseInt(Math.random() * 100, 10),
      supplier: '供货商一号',
      bar_code: '123456789123454798132468425',
    }, {
      name: '戴尔台式机',
      purchase_price: (Math.random() * 200).toFixed(2),
      count: parseInt(Math.random() * 100, 10),
      supplier: '供货商一号',
      bar_code: '123456789123454798132468425',
    }, {
      name: '阿尼玛化妆品',
      purchase_price: (Math.random() * 200).toFixed(2),
      count: parseInt(Math.random() * 100, 10),
      supplier: '供货商一号',
      bar_code: '123456789123454798132468425',
    }, {
      name: '婴儿玩具摇铃',
      purchase_price: (Math.random() * 200).toFixed(2),
      count: parseInt(Math.random() * 100, 10),
      supplier: '供货商一号',
      bar_code: '123456789123454798132468425',
    },
  ], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
}
