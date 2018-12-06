

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      name: '测试人1',
      nickname: 'test1',
      order_address: '海南省 海口市 美兰区',
      gender: true,
      password: '123456',
      phone: '12345678901',
    }, {
      name: '康明',
      nickname: 'kangming',
      order_address: '甘肃省 甘南藏族自治州 舟曲县',
      password: 123456,
      gender: true,
      phone: '12345678901',
    }, {
      nickname: 'longyang',
      password: 123456,
      order_address: '宁夏回族自治区 银川市 永宁县',
      name: '龙艳',
      gender: false,
      phone: '12345678901',
    },
    {
      nickname: 'wangxiulan',
      password: 123456,
      order_address: '湖北省 孝感市 汉川市',
      name: '王秀兰',
      gender: false,
      phone: '12345678901',
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
