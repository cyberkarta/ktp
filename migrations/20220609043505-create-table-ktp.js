'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ktp', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true
      },
      nik:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      nama:{
          type: Sequelize.STRING,
          allowNull: false
      },
      jenis_kelamin:{
        type: Sequelize.STRING,
        allowNull: false
      },
      alamat:{
        type: Sequelize.STRING,
        allowNull: true
      },
      kelurahan:{
        type: Sequelize.STRING,
        allowNull: true
      },
      kecamatan:{
        type: Sequelize.STRING,
        allowNull: true
          },
      kabupaten:{
        type: Sequelize.STRING,
        allowNull: true
      },
      provinsi:{
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
     });
     await queryInterface.addConstraint('ktp',{
      type: 'unique',
      fields: ['nik'],
      name: 'UNIQUE_KTP_NIK'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ktp');
  }
};
