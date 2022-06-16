import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
    id: Number,
    name: String,
    price: Number
});

const serviceModel = mongoose.model('service', serviceSchema);

export default serviceModel;