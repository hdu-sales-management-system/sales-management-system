

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('images', [
    // 创意礼物
    {
      url: 'http://img3m9.ddimg.cn/18/31/1188024669-1_e_1.jpg',
      type: 'carource',
      present_id: 1,
    },
    {
      url: 'http://img3m9.ddimg.cn/18/31/1188024669-1_h_1.jpg',
      type: 'carource',
      present_id: 1,
    }, {
      url: 'http://img3m9.ddimg.cn/18/31/1188024669-4_e_1.jpg',
      type: 'carource',
      present_id: 1,
    }, {
      url: ' http://img30.360buyimg.com/popWaterMark/jfs/t11236/132/470834262/176665/c3aab6b6/59f16d2bN4f7740ad.jpg',
      type: 'detail',
      present_id: 1,
    }, {
      url: ' http://img30.360buyimg.com/popWaterMark/jfs/t10762/185/2227534034/112863/5e60c768/59f16d2cNc09134ff.jpg',
      type: 'detail',
      present_id: 1,
    }, {
      url: 'http://img30.360buyimg.com/popWaterMark/jfs/t11263/145/466378289/174646/4b4c8c80/59f16d2dNa952ba24.jpg',
      type: 'detail',
      present_id: 1,
    }, {
      url: 'http://img30.360buyimg.com/popWaterMark/jfs/t10162/31/2215460699/112844/a409f04a/59f16d2eN11d2700b.jpg',
      type: 'detail',
      present_id: 1,
    },
    // 乐高
    {
      url: 'http://img3m5.ddimg.cn/21/4/1212305115-1_e_1.jpg',
      type: 'carource',
      present_id: 2,
    }, {
      url: 'http://img3m5.ddimg.cn/21/4/1212305115-1_h_1.jpg',
      type: 'carource',
      present_id: 2,
    }, {
      url: 'http://img3m5.ddimg.cn/21/4/1212305115-2_e_1.jpg',
      type: 'carource',
      present_id: 2,
    }, {
      url: 'http://img3m5.ddimg.cn/21/4/1212305115-3_e_1.jpg',
      type: 'carource',
      present_id: 2,
    }, {
      url: 'http://img3m5.ddimg.cn/21/4/1212305115-6_e_1.jpg',
      type: 'carource',
      present_id: 2,
    }, {
      url: 'http://img58.ddimg.cn/99999990003453608.jpg',
      type: 'detail',
      present_id: 2,
    }, {
      url: 'http://img59.ddimg.cn/99999990003453609.jpg',
      type: 'detail',
      present_id: 2,
    }, {
      url: 'http://img50.ddimg.cn/99999990003453610.jpg',
      type: 'detail',
      present_id: 2,
    }, {
      url: 'http://img51.ddimg.cn/99999990003453611.jpg',
      type: 'detail',
      present_id: 2,
    }, {
      url: 'http://img52.ddimg.cn/99999990003453612.jpg',
      type: 'detail',
      present_id: 2,
    },
    // 儿童手表
    {
      url: 'http://img3m9.ddimg.cn/4/36/1054429699-1_e_1.jpg',
      type: 'carource',
      present_id: 3,
    }, {
      url: 'http://img3m9.ddimg.cn/4/36/1054429699-1_h_1.jpg',
      type: 'carource',
      present_id: 3,
    }, {
      url: 'http://img3m9.ddimg.cn/4/36/1054429699-2_e_1.jpg',
      type: 'carource',
      present_id: 3,
    }, {
      url: 'http://img3m5.ddimg.cn/21/4/1212305115-3_e_1.jpg',
      type: 'carource',
      present_id: 3,
    }, {
      url: 'http://img3m9.ddimg.cn/4/36/1054429699-3_e_1.jpg',
      type: 'carource',
      present_id: 3,
    }, {
      url: 'http://img56.ddimg.cn/182190049318836.jpg',
      type: 'detail',
      present_id: 3,
    },
    // 绿植
    {
      url: 'http://img3m9.ddimg.cn/25/15/1470464449-1_e_2.jpg',
      type: 'carource',
      present_id: 4,
    }, {
      url: 'http://img3m9.ddimg.cn/25/15/1470464449-2_e_2.jpg',
      type: 'carource',
      present_id: 4,
    }, {
      url: 'http://img3m9.ddimg.cn/4/36/1054429699-2_e_1.jpg',
      type: 'carource',
      present_id: 4,
    }, {
      url: 'http://img3m9.ddimg.cn/25/15/1470464449-3_e_2.jpg',
      type: 'carource',
      present_id: 4,
    }, {
      url: 'http://img56.ddimg.cn/200390044239646_y.jpg',
      type: 'detail',
      present_id: 4,
    }, {
      url: 'http://img57.ddimg.cn/200390044239647_y.jpg',
      type: 'detail',
      present_id: 4,
    },
    // 索尼
    ...Array(25).fill('').map((val, idx) => ({
      url: 'http://img3m0.ddimg.cn/79/35/1429007560-2_e_1.jpg',
      type: 'carource',
      present_id: idx + 5,
    })),
    ...Array(25).fill('').map((val, idx) => ({
      url: 'http://img3m0.ddimg.cn/79/35/1429007560-4_e_1.jpg',
      type: 'carource',
      present_id: idx + 5,
    })),
    ...Array(25).fill('').map((val, idx) => ({
      url: 'http://img57.ddimg.cn/48610025313107.jpg',
      type: 'detail',
      present_id: idx + 5,
    })),
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
