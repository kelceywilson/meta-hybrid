'use strict';
module.exports = (sequelize, DataTypes) => {
    const Transfer = sequelize.define('Transfer', {
        from: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        to: {
            allowNull: false,
            type: DataTypes.STRING
        },
        amount: {
            allowNull: false,
            type: DataTypes.STRING
        },
    }, {});
    Transfer.associate = function(models) {
        // associations can be defined here
    };
    return Transfer;
};