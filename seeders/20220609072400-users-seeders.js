'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('users', [
      {
        email: 'dokter1@gmail.com',
        password: await bcrypt.hash('Dokter1234-',10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: 'dokter2@gmail.com',
        password: await bcrypt.hash('Dokter1234-',10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: 'dokter3@gmail.com',
        password: await bcrypt.hash('Dokter1234-',10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: 'dokter4@gmail.com',
        password: await bcrypt.hash('Dokter1234-',10),
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
