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
    image: {
      type: String,
      default: "http://multisim-insigneo.org/wp-content/uploads/2015/02/blank-profile-picture.png"
    },
    cigarLog: [CigarSchema]
})

module.exports = {
    UserSchema,
    CigarSchema
}