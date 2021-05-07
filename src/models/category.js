module.exports = (sequelize, DataTypes)=>{
  const Category = sequelize.define("Categories",{
      name:{
          type: DataTypes.STRING,
      },
  });
  Category.associate = (models)=>{
      Product.hasMany(models.Category,{
          foreignKey:"id_cate",
          as:"Products",
      });
  };
  return Category;
};