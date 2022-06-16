import axios from 'axios';

const url = "http://localhost:5000/services";

export const addNewService = async (serviceRecord) =>
{
    await axios.post(`${url}/add-new`, serviceRecord);
}

export const getServiceRecords = async () =>
{
    const services =  await axios.get(`${url}`);
    
    return services.data;
}   

export const getNextServiceID = async ()=>
{
    
}

export const deleteServiceRecord = async (id)=>
{
    await axios.delete(`${url}/${id}`);
}

export const updateServiceRecord = async (updatedRecord)=>
{
    console.log(updatedRecord);
    await axios.put(`${url}/update`,  updatedRecord);

}   