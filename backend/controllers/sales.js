import saleModel from "../models/sale.js";

export const getSales = async (req, res) => 
{
    try {
        const salesRecord = await saleModel.find();
        res.json(salesRecord);
    } catch (error) {
        console.log("Could not get sales record");
    }

}

export const addNewSale = async (req, res) =>
{
    const body = req.body;
    const newSale = new saleModel({id: body.id, date: body.date, vehicleNumber: body.vehicleNumber, vehicleType: body.vehicleType, services: body.services, totalPrice: body.totalPrice});
    await newSale.save();
}

export const deleteSale = async (req, res)=>
{
    const tempId = req.params.id;
    await saleModel.deleteMany({id: tempId});
    res.send("");
}