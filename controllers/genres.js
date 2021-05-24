const models = require('../models')

const getAllGenres = async (req, res) => {
  try {
    const genres = await models.Genres.findAll({
    })

    return res.send(genres)
  } catch (error) {
    return res.status(500).send('Unable to retrieve all genres')
  }
}

const getGenreById = async (req, res) => {
  try {
    const { id } = req.params

    const genre = await models.Genres.findOne({
      where: { id },
      include: [{
        model: models.Novels,
        include: [{ model: models.Genres }]
      }]
    })

    return genre ? res.send(genre) : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve genre')
  }
}

module.exports = { getAllGenres, getGenreById }
