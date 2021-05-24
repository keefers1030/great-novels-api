const express = require('express')
const { getAllAuthors, getAuthorById } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelById } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)

app.get('authors/:id', getAuthorById)

app.get('genres', getAllGenres)

app.get('genres/:id', getGenreById)

app.get('novels', getAllNovels)

app.get('novels/:id', getNovelById)

app.all('*', (req, res) => {
  return res.status(404).send('404 Error')
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337')
})
