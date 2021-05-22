const express = require('express')
const { getAllAuthors, getAuthorGenreID} = require('./controllers/authors')
const { getAllGenres, getGenreID } = require('./controllers/genres')
const { getAllNovels, getNovelsID} = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)

app.get('authors/:id', getAuthorGenreID)

app.get('genres', getAllGenres)

app.get('genres/:id', getGenreID)

app.get('novels', getAllNovels)

app.get('novels/:id', getNovelsID)

