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
      tipo_animal: {
        type: Sequelize.STRING,
        allowNull: false,
        values: ['poultry', 'swine']
      },
      localizacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      entrada_plantel: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      peso_compra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      raca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codigo_rastreamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fase_producao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_granja: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_animal: {
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
