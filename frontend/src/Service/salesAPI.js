import axios from "axios";

const url = "http://localhost:5000/sales";

export const addNewSale = async (saleRecord) =>
{
    await axios.post(`${url}/add-new`, saleRecord);
}

export const getSalesRecord = async () =>
{  
    const salesRecord = await axios.get(url);

    return salesRecord.data;
}

export const deleteSaleRecord = async (id)=>
{
    await axios.delete(`${url}/${id}`);
}