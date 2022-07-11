import mongoose from "mongoose";

const connection = {};
const isConnected = true;
async function connect() {
    if (connection.isConnected) {
        console.log('Already Connected');
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log('use previous connection');
            return;
        }
        await mongoose.disconnect();
    }
    const db = mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log('new Connection');
    // connection.isConnected = db.connections[0].readyState;
    connection.isConnected = db.connections;

}
async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log('not disconnected');
        }
    }
}
const mongodb = { connect, disconnect };
export default mongodb;