'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.song);
      this.hasMany(models.album);
    }
  };
  artist.init({
    artist_name: DataTypes.STRING,
    cover_img: DataTypes.TEXT,
    description: DataTypes.TEXT,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'artist',
  });
  return artist;
};