'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('actor', [
      {
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
        last_update: new Date(),
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        age: 25,
        last_update: new Date(),
      },
      {
        first_name: 'Bob',
        last_name: 'Johnson',
        age: 40,
        last_update: new Date(),
      },
      {
        first_name: 'Alice',
        last_name: 'Brown',
        age: 35,
        last_update: new Date(),
      },
      {
        first_name: 'Eve',
        last_name: 'Davis',
        age: 28,
        last_update: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('actor', null, {});
  },
};
