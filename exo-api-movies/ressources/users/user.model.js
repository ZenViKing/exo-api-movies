import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fields: {
        name: { Type: String },
        email: { Type: String }

    },
});
export const User = mongoose.model('user', userSchema);