import { getService_arr } from "./Services_arr";
const services_arr = getService_arr();

const Sales_arr = [
    {
        id: 1,
        date:"12-05-2022",
        vehicleNumber: "LMR 6050",
        vehicleType: "bike",
        services: [services_arr[1], services_arr[3]],
        totalPrice: 850
    },
    {
        id: 2,
        date:"12-05-2022",
        vehicleNumber: "LHR 9050",
        vehicleType: "car",
        services: [services_arr[0], services_arr[2]],
        totalPrice: 2550
    },
    {
        id: 3,
        date:"13-05-2022",
        vehicleNumber: "ABB 1210",
        vehicleType: "car",
        services: [services_arr[0], services_arr[3]], 
        totalPrice: 1050
    }
]


export function getSales_arr()
{
    return Sales_arr;
}