module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define(
    'Cliente',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING
      },
      endereco: {
        type: DataTypes.STRING
      },
      telefone: {
        type: DataTypes.STRING
      },
    },
    {
      tableName: 'clientes',
      timestamps: false
    }
  );

  Cliente.associate = function(modelos){
    Cliente.belongsToMany(modelos.Servico, {
      as: 'servicos',
      through: 'cliserv',
      foreignKey: 'clientes_id',
      otherKey: 'servicos_id',

      timestamps: false
    }),
    Cliente.hasMany(modelos.Usuario, {
      
      as: 'usuario',

      foreignKey: 'clientes_id'
    })
  }


  return Cliente;
}