

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('images', [
    {
      url: 'http://img3m8.ddimg.cn/47/7/25215248-2_e_1.jpg',
      type: 'carource',
      present_id: 3,
    }, {
      url: 'http://img3m8.ddimg.cn/47/7/25215248-3_e_1.jpg',
      type: 'carource',
      present_id: 4,
    }, {
      url: 'http://img3m8.ddimg.cn/95/8/1428449018-2_e_1.jpg',
      type: 'carource',
      present_id: 4,
    }, {
      url: 'http://img3m9.ddimg.cn/40/18/1405123969-2_e_2.jpg',
      type: 'carource',
      present_id: 3,
    }, {
      url: 'http://img3m9.ddimg.cn/40/18/1405123969-5_e_1.jpg',
      type: 'carource',
      present_id: 1,
    }, {
      url: 'http://img3m6.ddimg.cn/36/27/1362966696-4_e_1.jpg',
      type: 'carource',
      present_id: 2,
    }, {
      url: 'http://img3m6.ddimg.cn/36/27/1362966696-3_e_1.jpg',
      type: 'carource',
      present_id: 2,
    }, {
      url: 'http://img3m6.ddimg.cn/36/27/1362966696-5_e_1.jpg',
      type: 'carource',
      present_id: 1,
    }, {
      url: 'http://img3m6.ddimg.cn/36/27/1362966696-2_e_1.jpg',
      type: 'carource',
      present_id: 2,
    }], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
}
