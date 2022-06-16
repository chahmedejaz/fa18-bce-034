import React from 'react';

const Orders = (props) => {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Services</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Number Plate</th>
                    </tr>
                </thead>
                <tbody>
                    {props.details.map(
                        (order, index) => <DisplayOrder data={order} i={index}/>
                    )}
                </tbody>
            </table>
        </>
    );
}

const DisplayOrder = (props) => {
    return (
        <tr>
            <th scope="row">{props.i + 1}</th>
            <td>{props.data.customerName}</td>
            <td>{props.data.vehicleType}</td>
            <td>{props.data.services.toString()}</td>
            <td>{props.data.bookingDate}</td>
            <td><img src={props.data.numPlate} alt='number plate image' /></td>
            {/* <td><img src={require(props.data.numPlate)} /></td> */}
        </tr>
    );
}

export default Orders;