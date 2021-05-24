const models = require('../models')

const getAllNovels = async (req, res) => {
  try {
    const novels = await models.Novels.findAll({
    })

    return res.send(novels)
  } catch (error) {
    return res.status(500).send('Unable to retrieve novels')
  }
}

const getNovelById = async (req, res) => {
  try {
    const { id } = req.params

    const novel = await models.Novels.findOne({
      where: { id },
      include: [{
        model: models.Novels,
        include: [{ model: models.Genres }]
      }]
    })

    return novel ? res.send(novel) : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve novel')
  }
}

module.exports = { getAllNovels, getNovelById }
