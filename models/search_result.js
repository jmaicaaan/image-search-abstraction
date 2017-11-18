'use strict';
module.exports = (sequelize, DataTypes) => {
  var search_result = sequelize.define('search_result', {
    term: DataTypes.STRING
  }, {
    freezeTableName: true, // avoid making the table name plural
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return search_result;
};