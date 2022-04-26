module.exports = (sequelize, DataTypes) => {
  const Servico = sequelize.define(
    'Servico',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING
      },
      grupo: {
        type: DataTypes.STRING
      },
      preco: {
        type: DataTypes.DECIMAL
      },
      tempo: {
        type: DataTypes.INTEGER
      },
    },
    {
      tableName: 'servicos',
      timestamps: false
    }
  );

  Servico.associate = function(modelos){
    Servico.belongsToMany(modelos.Cliente, {

      as: 'cliente', 
      through: 'cliserv',
      foreignKey: 'servicos_id',
      otherKey: 'clientes_id',

      timestamps: false,
    })
    Servico.belongsTo(modelos.Usuario, {
      as: 'usuario',
      foreignKey: 'usuario_id',
    })
  }

  return Servico;
}