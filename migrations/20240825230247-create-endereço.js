'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Enderecos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      cep: {
        type: Sequelize.STRING(8),
        allowNull: false
      },
      logradouro: {
        type: Sequelize.STRING(120),
        allowNull: false
      },
      numero: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING(60),
        allowNull: true
      },
      bairro: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      ibge: {
        type: Sequelize.STRING(8),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Enderecos');
  }
};
