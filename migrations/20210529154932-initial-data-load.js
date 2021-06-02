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
      { name: 'Adventure' },
      { name: 'African Literature' },
      { name: 'Crime' },
      { name: 'Drama' },
      { name: 'Dystopia' },
      { name: 'Fantasy' },
      { name: 'Fiction' },
      { name: 'French Literature' },
      { name: 'Gothic' },
      { name: 'Historical Fiction' },
      { name: 'Horror' },
      { name: 'Mystery' },
      { name: 'Plays' },
      { name: 'Russian Literature' },
      { name: 'Science Fiction' },
      { name: 'Thriller' },
      { name: 'Time Travel' },
      { name: 'War' },
    ])

    await queryInterface.bulkInsert('novels', [
      { title: 'Dracula', authorId: 1 },
      { title: 'The Picture of Dorian Gray', authorId: 2 },
      { title: 'The Color Purple', authorId: 3 },
      { title: 'War and Peace', authorId: 4 },
      { title: 'A Tale of Two Cities', authorId: 5 }
    ])

    return queryInterface.bulkInsert('novelsGenres', [
      { novelId: 1, genreId: 7 },
      { novelId: 1, genreId: 11 },
      { novelId: 1, genreId: 6 },
      { novelId: 2, genreId: 7 },
      { novelId: 2, genreId: 11 },
      { novelId: 2, genreId: 9 },
      { novelId: 2, genreId: 6 },
      { novelId: 3, genreId: 7 },
      { novelId: 3, genreId: 10 },
      { novelId: 4, genreId: 7 },
      { novelId: 4, genreId: 10 },
      { novelId: 4, genreId: 18 },
      { novelId: 4, genreId: 14 },
      { novelId: 5, genreId: 7 },
      { novelId: 5, genreId: 10 },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('novelsGenres')
    await queryInterface.bulkDelete('novels')
    await queryInterface.bulkDelete('genres')

    return queryInterface.bulkDelete('authors')
  }
}
