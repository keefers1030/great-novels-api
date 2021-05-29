'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('authors', [
      { nameFirst: 'Bram', nameLast: 'Stoker' },
      { nameFirst: 'Oscar', nameLast: 'Wilde' },
      { nameFirst: 'Alice', nameLast: 'Walker' },
      { nameFirst: 'Leo', nameLast: 'Tolstoy' },
      { nameFirst: 'Charles', nameLast: 'Dickens' }
    ])

    await queryInterface.bulkInsert('genres', [
      { name: 'Ficton, Horror, Fantasy' },
      { name: 'Ficton, Horror, Gothic, Fantasy' },
      { name: 'Fiction, Historical Fiction' },
      { name: 'Fiction, Historical Fiction, War, Russian Literature' },
      { name: 'Fiction, Historical Fiction' },
    ])

    await queryInterface.bulkInsert('novels', [
      { title: 'Dracula' },
      { title: 'The Picture of Dorian Gray' },
      { title: 'The Color Purple' },
      { title: 'War and Peace' },
      { title: 'A Tale of Two Cities' }
    ])
  },

  down: async (queryInterface, Sequelize) => {

  }
};
