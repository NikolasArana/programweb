import mongoose from 'mongoose';
import { config } from './env';

export const connectDB = async () => {
    await mongoose.connect(config.mongoUri);
};