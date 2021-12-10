export default (sequelize, DataTypes) => {
  const Album = sequelize.define(
    'album',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      album_name: {
        type: DataTypes.STRING
      },
      album_release_date: {
        type: DataTypes.DATE
      },
      record_label_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Album;
};