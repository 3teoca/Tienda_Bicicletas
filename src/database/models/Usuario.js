module.exports = function(sequelize,DataTypes){
    let alias = "user";
  
  
  let cols={
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
     
    },
     mail:{
      type: DataTypes.STRING,
     },
    contraseña: {
      type: DataTypes.STRING,
      
    },
    categoria_id:{
      type: DataTypes.INTEGER,
      
    },
    imagen: {
      type: DataTypes.STRING,
    
    },
    edad:{
      type: DataTypes.INTEGER,
      
    },
    
  }
    let config = {
      tableName:"usuarios",
      timestamps:false
    }

    let usuariosSequelize=sequelize.define(alias,cols,config);
    return usuariosSequelize
}