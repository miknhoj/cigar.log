const Schema = require('mongoose').Schema

const CigarSchema = new Schema({
    cigarName: String,
    rating: Number,
    Manufacturer: String,
    Origin: String,
    Body: String,
    Strength: String,
    Wrapper: String,
    Binder: String,
    Filelr: String,
    Notes: String    
})


const UserSchema = new Schema({
    userName: String,
    age: Number,
    location: String,    
    cigarLog: [CigarSchema]
})

module.exports = {
    UserSchema,
    CigarSchema
}