const mongoose = require('mongoose')
const DB_URL = require('../config')

const ConnectMongoDb = () => {
    const connect = async () => {
        try {
            const data = await mongoose.connect(process.env.DB_URL,  { useNewUrlParser: true, useUnifiedTopology: true})
            console.log(`base de datos on : ${data.connection.name}`)
        } catch(err) {
            console.log(err)
        }
    }

    return {
        connect
    }
}

module.exports = ConnectMongoDb;