const mongoose = require ('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://syam:1234@cluster0.fpyty9c.mongodb.net/?retryWrites=true&w=majority"
            );

        console.log(`Mongo db connectedd: ${conn.connection.host} `);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit()
    }
};

module.exports = connectDB;