import mongoose from "mongoose";

const saleSchema = mongoose.Schema({
    id: Number,
    date: String,
    vehicleNumber: String,
    vehicleType: String,
    services: Array,
    totalPrice: Number
});

const saleModel = mongoose.model('sale', saleSchema);

export default saleModel;