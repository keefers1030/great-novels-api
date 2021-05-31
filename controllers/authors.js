const { Sequelize } = require('sequelize')
const models = require('../models')

const getAllAuthors = async (req, res) => {
  try {
    const authors = await models.Authors.findAll()

    return res.send(authors)
  } catch (error) {
    return res.status(500).send('Unable to retrieve authors')
  }
}



const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params
    const author = await models.Authors.findOne({
      where: { id: {[models.Op.like]: `%${id}` } },
      include: [{
        model: models.Novels,
        include: [{ model: models.Genres }]
      }]
    })

    return author ? res.send(author) : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve author')
  }
}

module.exports = { getAllAuthors, getAuthorById }
