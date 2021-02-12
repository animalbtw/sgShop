const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true,},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketJewelry = sequelize.define('basket_device', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const jewelryType = sequelize.define('jewelry_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING, allowNull: false, unique: true }
});

const jewelry = sequelize.define('jewelry', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  type: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false }
});

jewelryType.hasMany(jewelry);
jewelry.belongsTo(jewelryType);

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketJewelry)
BasketJewelry.belongsTo(Basket)

jewelry.hasMany(BasketJewelry)
BasketJewelry.belongsTo(jewelry)

module.exports = {
  User,
  Basket,
  BasketJewelry,
  jewelry,
  jewelryType
}