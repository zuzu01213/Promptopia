import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'promptopia',
      
        });

        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Rethrow the error to handle it higher up in your application
    }
};
