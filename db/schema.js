const Schema = require('mongoose').Schema

const CigarSchema = new Schema({
    cigarName: String,
    rating: Number,
    manufacturer: String,
    origin: String,
    body: String,
    strength: String,
    wrapper: String,
    binder: String,
    filler: String,
    notes: String    
})

const UserSchema = new Schema({
    userName: String,
    age: Number,
    location: String,    
    image: String,
    cigarLog: [CigarSchema]
})

module.exports = {
    UserSchema,
    CigarSchema
}