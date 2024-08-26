const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Endereco = sequelize.define('Endereco', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'Id', 
    },
    Cep: {
      type: DataTypes.STRING(8),
      allowNull: false,
      field: 'Cep',
    },
    Logradouro: {
      type: DataTypes.STRING(120),
      allowNull: false,
      field: 'Logradouro',
    },
    Numero: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'Numero',
    },
    Complemento: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'Complemento',
    },
    Bairro: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'Bairro',
    },
    Cidade: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'Cidade',
    },
    Estado: {
      type: DataTypes.STRING(2),
      allowNull: false,
      field: 'Estado',
    },
    IBGE: {
      type: DataTypes.STRING(8),
      allowNull: false,
      field: 'IBGE',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'createdAt',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'updatedAt',
    },
  }, {
    tableName: 'Enderecos',
    timestamps: true,
  });

  return Endereco;
};