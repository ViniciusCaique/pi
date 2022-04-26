module.exports = (sequelize, DataTypes ) => {
  const Usuario = sequelize.define(
    'Usuario',
    { 
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      }, 
      nome: { 
        type: DataTypes.STRING
      },
      email: { 
        type: DataTypes.STRING
      },
      senha: { 
        type: DataTypes.STRING
      },
    },
    {
      tableName: 'usuario',
      timestamps: false
    }
  );

  Usuario.associate = function(modelos){
    Usuario.belongsTo(modelos.Cliente,{
      as: 'cliente',
      foreignKey: 'clientes_id'
    })
    Usuario.hasMany(modelos.Servico, {
      as: 'servico',
      foreignKey: 'usuario_id',
    })
  }

  return Usuario;
}