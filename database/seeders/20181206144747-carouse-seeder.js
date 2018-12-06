// name: STRING,
// url: STRING,
// start_day: DATE,
// end_day: DATE,
// priority: INTEGER,

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('carouses', [
    {
      name: '001',
      url: 'http://img59.ddimg.cn/216590051630379_y.jpg',
      start_day: new Date().toLocaleString(),
      end_day: new Date(+Date.now() + 3600 * 24 * 7).toLocaleString(),
      priority: parseInt(Math.random() * 100, 10),
    },
    {
      name: '002',
      url: 'http://img56.ddimg.cn/215080056115006_y.jpg',
      start_day: new Date().toLocaleString(),
      end_day: new Date(+Date.now() + 3600 * 24 * 7).toLocaleString(),
      priority: parseInt(Math.random() * 100, 10),
    },
    {
      name: '003',
      url: 'http://img62.ddimg.cn/upload_img/00705/S/1242x366_wzh_20181128-1543579848.jpg',
      start_day: new Date().toLocaleString(),
      end_day: new Date(+Date.now() + 3600 * 24 * 7).toLocaleString(),
      priority: parseInt(Math.random() * 100, 10),
    }, {
      name: '004',
      url: 'http://img51.ddimg.cn/212860097294661_y.jpg',
      start_day: new Date().toLocaleString(),
      end_day: new Date(+Date.now() + 3600 * 24 * 7).toLocaleString(),
      priority: parseInt(Math.random() * 100, 10),
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
