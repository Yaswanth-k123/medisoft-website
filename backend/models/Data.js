import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    data: {
        type: String,
    },
});

export default mongoose.model('Data', dataSchema)