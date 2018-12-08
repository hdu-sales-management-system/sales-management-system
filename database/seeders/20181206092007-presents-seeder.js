

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
      title: '360手机 N7 Pro 全网通 6GB+128GB 珊瑚红 移动联通电信4G手机 双卡双待 全面屏 游戏手机',
      cover: 'https://img10.360buyimg.com//n0/jfs/t19915/274/2624345163/198086/468e2dc5/5b7bc105Ne7347a49.jpg',
      // description: '',
      starts: 3,
      price: 784.7,
      hot: 11,
      count: 17,
      categorystr: 'digital',
      commentCount: parseInt(Math.random() * 200, 10),
      composite: parseInt(Math.random() * 100, 10),
      saleCount: parseInt(Math.random() * 100, 10),

    }, {
      title: '戴尔(DELL)成就3470高性能商用办公台式电脑整机(八代i5-8400 8G 1T 四年上门售后 键鼠 WIFI 蓝牙)21.5英寸',
      cover: 'https://img12.360buyimg.com//n0/jfs/t19477/208/1997222697/193103/63e18627/5ae0024eNd5fc6fa2.jpg',
      // description: '',
      starts: 3,
      price: 4398.00,
      hot: 121,
      count: 8,
      categorystr: 'digital',
      commentCount: parseInt(Math.random() * 200, 10),
      composite: parseInt(Math.random() * 100, 10),
      saleCount: parseInt(Math.random() * 100, 10),
    }, {
      title: '阿玛尼（GIORGIO ARMANI）轻垫精华红气垫/新款樱花粉气垫BB粉底液 #4 自然偏白 适合亚洲肤质偏白',
      cover: 'https://img11.360buyimg.com//popWaterMark/jfs/t1/3776/39/13914/226832/5bd9845bEdd756c09/ad142eda143d3a0d.jpg',
      // description: '',
      starts: 2,
      price: 518.00,
      hot: 104,
      count: 20,
      categorystr: 'cosmetic',
      commentCount: parseInt(Math.random() * 200, 10),
      composite: parseInt(Math.random() * 100, 10),
      saleCount: parseInt(Math.random() * 100, 10),

    }, {
      title: '【120度水煮消毒】婴儿玩具摇铃新生儿0-3-6-12个月牙胶手摇铃宝宝玩具0-1岁益智 10件套婴儿摇铃-高温水煮消毒',
      cover: 'https://img14.360buyimg.com/n0/jfs/t17080/141/827177882/219224/507f0167/5aa8daa4Nb68fd9f9.jpg',
      // description: '',
      starts: 3,
      price: 20.00,
      hot: 170,
      count: 5,
      categorystr: 'toy',
      commentCount: parseInt(Math.random() * 200, 10),
      composite: parseInt(Math.random() * 100, 10),
      saleCount: parseInt(Math.random() * 100, 10),

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
