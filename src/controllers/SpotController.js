const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports = {
  async index(req, res) {
    const { description } = req.query

    const spots = await Spot.find({ descriptions: description })

    return res.json(spots)
  },

  async store(req, res) {

    const { filename } = req.file;
    const { name_property, descriptions, price, adress } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id)

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' })
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      name_property,
      adress,
      descriptions: descriptions.split(',').map(description => description.trim()),
      price
    })

    return res.json(spot)
  }
}
