import mongoose from "mongoose";

const business_insightSchema = mongoose.Schema({
    id: Number,
    date: String,
    noOfCars: Number,
    noOfBikes: Number,
    totalSale: Number
});

const business_insightModel = mongoose.model('business_insight', business_insightSchema);

export default business_insightModel;