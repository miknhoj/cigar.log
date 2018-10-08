const mongoose = require('mongoose')
const { UserSchema, CigarSchema } = require('./schema')

const UserModel = mongoose.model('User', UserSchema)
const CigarModel = mongoose.model('Cigar', CigarSchema)

module.exports = {
    User: UserModel,
    Cigar: CigarModel
}