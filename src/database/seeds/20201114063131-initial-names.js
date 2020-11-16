'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tbl_animal',
      [
        {
          nome: 'SAX648',
          tipo_animal: 'poultry',
          localizacao: 'Sala 5',
          data_nascimento: '2017-06-29 02:53',
          entrada_plantel: '2019-06-16',
          peso_compra: '98.934',
          raca: 'ac-7077/m',
          codigo_rastreamento: '742B7DC9863349D2A88A9AE6AC3DDABD',
          fase_producao: 'ENG',
          tipo_granja: 'URE',
          status_animal: 'ativo',
          created_at: '2020-11-14',
          updated_at: '2020-11-14'
        },
        {
          nome: 'CPI834',
          tipo_animal: 'poultry',
          localizacao: 'Pocilga/LADO B',
          data_nascimento: '2017-07-21 00:18',
          entrada_plantel: '2019-05-30',
          peso_compra: '125.056',
          raca: 'yp-4979/d',
          codigo_rastreamento: 'DC7FFF687B564B48850055B8C5737485',
          fase_producao: 'REC',
          tipo_granja: 'UCC',
          status_animal: 'ativo',
          created_at: '2020-11-14',
          updated_at: '2020-11-14'
        },
        {
          nome: 'IAH768',
          tipo_animal: 'swine',
          localizacao: 'Pocilga/NORTE',
          data_nascimento: '2017-08-18 07:00',
          entrada_plantel: '2019-05-29',
          peso_compra: '115.232',
          raca: 'ui-4460/g',
          codigo_rastreamento: '9479412EFF3F4FC1826FCB9A8BE47E50',
          fase_producao: 'MAT',
          tipo_granja: 'UCC',
          status_animal: 'ativo',
          created_at: '2020-11-14',
          updated_at: '2020-11-14'
        },
        {
          nome: 'AFL876',
          tipo_animal: 'swine',
          localizacao: 'Sala 2',
          data_nascimento: '2017-06-22 01:54',
          entrada_plantel: '2019-06-21',
          peso_compra: '118.31',
          raca: 'pk-2645/j',
          codigo_rastreamento: 'E7B31F4C02904EE6B155F71C45AA17FA',
          fase_producao: 'CRE',
          tipo_granja: 'UPL',
          status_animal: 'ativo',
          created_at: '2020-11-14',
          updated_at: '2020-11-14'
        },
        {
          nome: 'IQQ273',
          tipo_animal: 'swine',
          localizacao: 'Sala 6',
          data_nascimento: '2017-06-16 18:45',
          entrada_plantel: '2019-06-09',
          peso_compra: '134.952',
          raca: 'ui-4460/g',
          codigo_rastreamento: '2379C3718D0E43BB83D3D1554C577BB0',
          fase_producao: 'CRE',
          tipo_granja: 'UPD',
          status_animal: 'ativo',
          created_at: '2020-11-14',
          updated_at: '2020-11-14'
        },
        {
          nome: 'ISY854',
          tipo_animal: 'swine',
          localizacao: 'Sala 3',
          data_nascimento: '2017-08-26 10:48',
          entrada_plantel: '2019-06-16',
          peso_compra: '124.755',
          raca: 'cb-3114/g',
          codigo_rastreamento: '87D275E9D6FE45499668AA91E0A0F0C6',
          fase_producao: 'MAT',
          tipo_granja: 'UTE',
          status_animal: 'ativo',
          created_at: '2020-11-14',
          updated_at: '2020-11-14'
        },
        {
          nome: 'NIW164',
          tipo_animal: 'poultry',
          localizacao: 'Sala 9',
          data_nascimento: '2017-08-22 22:54',
          entrada_plantel: '2019-06-15',
          peso_compra: '142.42',
          raca: 'zm-4249/f',
          codigo_rastreamento: '2058C689FF804DAE84C82EFE514409D3',
          fase_producao: 'REC',
          tipo_granja: 'URE',
          status_animal: 'ativo',
          created_at: '2020-11-14',
          updated_at: '2020-11-14'
        },
        {
          nome: 'DXH634',
          tipo_animal: 'swine',
          localizacao: 'Sala 1',
          data_nascimento: '2017-06-23 02:53',
          entrada_plantel: '2019-05-07',
          peso_compra: '104.052',
          raca: 'sq-5790/s',
          codigo_rastreamento: 'FDE4D2DB1F4E4760B7F84C85AC108CEB',
          fase_producao: 'MAT',
          tipo_granja: 'UPL',
          status_animal: 'ativo',
          created_at: '2020-11-14',
          updated_at: '2020-11-14'
        },
        {
          nome: 'VHJ830',
          tipo_animal: 'poultry',
          localizacao: 'Sala 8',
          data_nascimento: '2017-08-01 06:39',
          entrada_plantel: '2019-05-21',
          peso_compra: '89.34',
          raca: 'km-6624/b',
          codigo_rastreamento: 'E41676E68AE3462E97A121219B0B19AC',
          fase_producao: 'ENG',
          tipo_granja: 'URE',
          status_animal: 'ativo',
          created_at: '2020-11-14',
          updated_at: '2020-11-14'
        },
        {
          nome: 'EPM336',
          tipo_animal: 'swine',
          localizacao: 'Sala 5',
          data_nascimento: '2017-06-18 13:16',
          entrada_plantel: '2019-08-01',
          peso_compra: '131.214',
          raca: 'os-2179/d',
          codigo_rastreamento: '2DE3AAA2A1C8446E956ED50B6810FAE3',
          fase_producao: 'TER',
          tipo_granja: 'UPL',
          status_animal: 'ativo',
          created_at: '2020-11-14',
          updated_at: '2020-11-14'
        },
      
      ]
    )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
