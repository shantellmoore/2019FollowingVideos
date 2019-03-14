const Joi = require('joi')
module.exports ={
    register(req, res, next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
              new RegExp('^[a-zA-Z-0-9]{8,32}$')   
            )
        }

        const {error, value} = Joi.validate(req.body, schema)
        if (error) {
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'you must have valid email address'
                    })
                    break
                case 'password':
                res.status(400).send({
                    error: `the password provided failed to match the rules:
                    1. lower
                    2. length`
                })
                break
                default:
                res.status(400).send({
                    error: `invalid`
                })
            }
        }else{
        next()
        }
    }
}