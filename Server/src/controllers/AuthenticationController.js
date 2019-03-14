const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            const userJSON = user.toJSON()
        } catch (err) {
          res.status(400).send({
            error: 'this email is already in use'
          })
    }  
  }
}