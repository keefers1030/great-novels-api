const Sequelize = require('sequelize')
const AuthorsModel = require('./Authors')
const NovelsModel = require('./Novels')
const GenresModel = require('./Genres')
const NovelsGenresModel = ('./NovelsGenres')

const connection = new Sequelize('greatnovels', 'greatnovels', 'NovelPa$$word', {
  host: 'localhost', dialect: 'mysql'
})

const Authors = AuthorsModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const NovelsGenres = NovelsGenresModel(connection, Sequelize)

Novels.belongsTo(Authors)
Authors.hasMany(Novels)

Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })

module.exports = {
  Authors,
  Novels,
  Genres,
  NovelsGenres
}
