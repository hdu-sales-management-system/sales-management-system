module.exports = (app) => {
  const {
    DOUBLE,
    INTEGER,
    TEXT,
    STRING,
    BOOLEAN,
  } = app.Sequelize
  const present = app.model.define('present', {
    name: STRING,
    title: STRING,
    status: STRING,
    off: BOOLEAN,
    offcost: DOUBLE,
    hot: INTEGER,
    count: INTEGER,
    description: TEXT,
    starts: INTEGER,
    commentCount: INTEGER,
    originl_price: DOUBLE,
    price: DOUBLE,
    cover: STRING,
    categorystr: STRING, // duplication of name
    composite: INTEGER,
    saleCount: INTEGER,
  }, {
    underscored: true,
  })
  present.associate = function presentAssociate() {
    const {
      Category, Image, Cart, Tag, Present, Comment, PresentTag, OrderItem,
    } = app.model
    Present.hasMany(Image)
    Present.hasMany(Comment)
    Present.belongsTo(Category)
    Present.hasMany(Cart)
    Present.hasMany(OrderItem)
    Present.belongsToMany(Tag, {
      through: PresentTag,
      foreignKey: 'present_id',
      as: 'Tag',
    })
    // associations can be defined here
  }
  return present
}
