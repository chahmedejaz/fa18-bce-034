import React, { Component } from 'react';
import Orders from './Orders';

class OrderDetails extends Component {

    render() {
        return (
            <>
                <Orders details={this.props.details}/>
            </>
        );
    }
}





export default OrderDetails;

// const OrderDetails = [
//     {
//         customerName: "Ahmed Ijaz",
//         vehicleType: "Car",
//         services: ["Wash", "Oil Change"],
//         bookingDate: 20,
//         numPlate: '"C:\Users\Phoenix-Rider\Desktop\mid-term-exam.jpeg"'
//     }
// ];

// export default OrderDetails;