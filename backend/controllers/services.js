import servicesModel from '../models/service.js';

export const getServices = async (req, res) => {
    try {
        const serviceRecords = await servicesModel.find();
        // console.log(serviceRecords);
        res.json(serviceRecords);
    } catch (error) {
        res.send("null");
    }
}

export const addNewService = async (req, res) => {
    const serviceRecord = new servicesModel({ id: req.body.id, name: req.body.name, price: req.body.price });

    try {
        await serviceRecord.save();
        console.log("Saved the service record!");
        res.send("");
    } catch (error) {
        console.log("Could not save the service record.");
    }
}

export const getNextServiceID = async (req, res) => {
    const allServices = await servicesModel.find();
    if (allServices.length === 0) {
        res.send("1");
    }
    else
    {
        res.send(`${allServices.length + 1}`);
    }

}

export const deleteService = async (req, res)=>
{
    const tempID = req.params.id;
    await servicesModel.deleteMany({id: tempID});
    res.send("");
}

export const updateService = async (req, res)=>
{
    await servicesModel.updateMany({id: req.body.id}, {name: req.body.name, price: req.body.price});
    res.send("");
}