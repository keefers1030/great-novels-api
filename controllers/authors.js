const models = require('../models')

const getAllAuthors = async (req, res) => {
  try {
    const authors = await models.Authors.findAll({
      include: [{ model: models.Authors },
      include: { model: models.Genres} ]
    })
    return res.send(authors)
  } catch (error) {
    return res.status(500).send('Unable to retrieve authors')
  }
}

const