module.exports = (sequelize, dataType)=>{

    const Usuario = sequelize.define('Usuarios',{
        id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataType.STRING,

        },
        lastname:{
            type: dataType.STRING,
        },
        email:{
            type: dataType.STRING,
        },
        password:{
            type: dataType.STRING,
        },
        avatar:{
            type: dataType.STRING,
        },
        category:{
            type: dataType.INTEGER,
        }
    })
    return Usuario
}