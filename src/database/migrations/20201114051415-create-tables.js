'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_animal', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipoAnimal: {
        type: Sequelize.STRING,
        allowNull: false,
        values: ['poultry', 'swine']
      },
      localizacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      entradaPlantel: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      pesoCompra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      raca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codigoRastreamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      faseProducao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipoGranja: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      statusAnimal: {
        type: Sequelize.STRING,
        allowNull: false,
        values: [ 'ativo', 'inativo', 'vendido', 'descartado' ]
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
