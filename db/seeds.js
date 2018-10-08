require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_URI, { useNewUrlParser: true}
)

const { User, Cigar } = require('./model')

const cigarOne = new Cigar({
    cigarName: 'Hit & Run',
    rating: '4',
    manufacturer: 'Room 101',
    origin: 'Dominican Republic',
    body: 'Mellow',
    strength: 'Medium',
    wrapper: 'Ecuador Habano',
    binder: 'Indonesia',
    filler:'Dominican Republic',
    notes: 'very nice'    
})
const cigarTwo = new Cigar({
    cigarName: 'The Wise Man',
    rating: '4',
    manufacturer: 'Foundation',
    origin: 'Dominican Republic',
    body: 'Mellow',
    strength: 'Medium',
    wrapper: 'Ecuador Habano',
    binder: 'Indonesia',
    filler:'Dominican Republic',
    notes: 'very nice' 
})

const john = new User({
    userName: 'John',
    age: '31',
    location: 'Atlanta, GA',    
    cigarLog: [cigarOne, cigarTwo]
})

const chris = new User({
    userName: 'Chris',
    age: 30,
    location: 'Midtown, GA',
    cigarLog: [cigarTwo]
})

User.deleteMany()
    .then(() => { 
        return User.insertMany([john, chris])
    })
    .then(() => {
        console.log('Successful Save')
        mongoose.connection.close()
    })