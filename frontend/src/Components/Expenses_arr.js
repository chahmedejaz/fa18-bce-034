
const Expenses_types = ["Products", "Meal", "Maintenance"];

const Expenses_arr = [
    {
        id: 1,
        date:"12-05-2022",
        type: Expenses_types[0],
        description: "Detergents 2 packets",
        totalPrice: 300
    },
    {
        id: 2,
        date:"12-05-2022",
        type: Expenses_types[1],
        description: "Meal for 5 workers, 100 each",
        totalPrice: 500
    },
    {
        id: 3,
        date:"13-05-2022",
        type: Expenses_types[2],
        description: "Motor repair",
        totalPrice: 600
    },
    {
        id: 4,
        date:"13-05-2022",
        type: Expenses_types[1],
        description: "Meal for 5 workers, 100 each",
        totalPrice: 500
    }
    
];


export function getExpenses_arr()
{
    return Expenses_arr;
}
export function getExpenses_types()
{
    return Expenses_types;
}