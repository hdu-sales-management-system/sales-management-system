

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('carts', [
    {
      count: parseInt(Math.random() * 10, 10),
      selected: Math.random() > 0.6,
      user_id: 1,
      present_id: 1,
    }, {
      count: parseInt(Math.random() * 10, 10),
      selected: Math.random() > 0.6,
      user_id: 1,
      present_id: 2,
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
