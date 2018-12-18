

module.exports = {
// name: STRING,
// title: STRING,
// status: STRING,
// off: BOOLEAN,
// offcost: DOUBLE,
// hot: INTEGER,
// count: INTEGER,
// starts: INTEGER,
// originl_price: DOUBLE,
// price: DOUBLE,
// cover: STRING,
// categorystr: STRING,
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('presents', [
    {
      title: '创意礼物',
      description: '创意礼物 心型天气预报瓶大号风暴爱心预测瓶子创意玻璃瓶家居饰品摆件 七夕送女朋友 送老师_红色',
      cover: 'http://img3m9.ddimg.cn/18/31/1188024669-1_h_1.jpg',
      starts: 66,
      price: 49.00,
      hot: 180,
      count: 150,
      categorystr: 'toy',
      commentCount: parseInt(Math.random() * 200, 10),
      composite: parseInt(Math.random() * 100, 10),
      saleCount: parseInt(Math.random() * 100, 10),
      depot_item_id: 1,
    },
    {
      title: '乐高积木',
      description: '乐高LEGO方头仔系列迪士尼米奇41624/米妮41625小颗粒积木_41624 米奇',
      cover: 'http://img3m5.ddimg.cn/21/4/1212305115-1_h_1.jpg',
      starts: 66,
      price: 99.00,
      hot: 180,
      count: 150,
      categorystr: 'toy',
      commentCount: parseInt(Math.random() * 200, 10),
      composite: parseInt(Math.random() * 100, 10),
      saleCount: parseInt(Math.random() * 100, 10),
      depot_item_id: 2,
    }, {
      title: '儿童手表',
      description: '华为儿童手表 3 Pro 极光蓝',
      cover: 'http://img3m9.ddimg.cn/4/36/1054429699-1_h_1.jpg',
      starts: 66,
      price: 879.00,
      hot: 180,
      count: 150,
      categorystr: 'toy',
      commentCount: parseInt(Math.random() * 200, 10),
      composite: parseInt(Math.random() * 100, 10),
      saleCount: parseInt(Math.random() * 100, 10),
      depot_item_id: 2,
    }, {
      title: '多肉植物',
      description: '多肉手绘韩式个性创意陶瓷迷你盆栽卡通 淡雅青瓷多肉绿植物小花盆',
      cover: 'http://img3m9.ddimg.cn/25/15/1470464449-1_h_2.jpg',
      starts: 66,
      price: 10.89,
      hot: 180,
      count: 150,
      categorystr: 'green',
      commentCount: parseInt(Math.random() * 200, 10),
      composite: parseInt(Math.random() * 100, 10),
      saleCount: parseInt(Math.random() * 100, 10),
      depot_item_id: 2,
    },
    ...Array(25).fill({
      title: '索尼单反',
      description: '索尼（SONY）ILCE-7RM3 全画幅微单 索尼A7R3相机 III 索尼a7r3_官网标配',
      cover: 'http://img3m0.ddimg.cn/79/35/1429007560-1_e_1.jpg',
      starts: 66,
      price: 17688.00,
      hot: 180,
      count: 150,
      categorystr: 'digital',
      commentCount: parseInt(Math.random() * 200, 10),
      composite: parseInt(Math.random() * 100, 10),
      saleCount: parseInt(Math.random() * 100, 10),
      depot_item_id: 2,
    }),
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
