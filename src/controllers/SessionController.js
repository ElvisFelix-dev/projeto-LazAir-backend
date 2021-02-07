const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const { name } = req.body
    const { email } = req.body
    const { phone } = req.body

    let user = await User.findOne({ name, email, phone })

    if (!user) {
      user = await User.create({ name, email, phone })
    }



    return res.json(user)
  }
}
