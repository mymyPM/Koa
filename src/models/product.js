module.exports = (sequelize,DataTypes)=>{
  const Product = sequelize.define("Products",{
      name:{
          type: DataTypes.STRING
      },
  });
  Product.associate = (models)=>{
      Product.belongsTo(models.Category,{
          foreignKey:"id_cate",
          onDelete: "CASCADE",
      });
  };
  return Product;
}