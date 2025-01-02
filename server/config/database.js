const mongoose = require('mongoose');

const database = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = database;