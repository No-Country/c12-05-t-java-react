const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('orden', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true
    },
 
    createdate: {
      type: DataTypes.DATEONLY, 
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('approve', 'cancel', 'delibery', 'traveling'),
      allowNull: true
    },
    shippingaddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shippingpromise: {
      type: DataTypes.DATEONLY
    }
  }, { timestamps: false });
};