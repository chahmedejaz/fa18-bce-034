import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../Components/PageTitle';
import { getSales_arr } from '../Components/Sales_arr';

let totalSale = 0;

class Sales extends Component {
    state = {}

    constructor(props)
    {
        super(props);
        this.state = {
            totalCount: this.props.data.length,
            totalSale: calculateTotal(this.props.data)
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        let clone = { ...state }; 
        clone.totalCount = props.data.length;
        clone.totalSale = calculateTotal(props.data);
        return clone;
    }

    render() {
        return (
            <>
                <PageTitle title="Sales" />

                <div>
                    <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "5px" }}>
                        <div>
                            {/* <p style={{ display: "block" }}><b>Search by Date:</b></p>
                            <input type="datetime" name="searchDate" id="searchDate" />
                            <button style={{ marginLeft: "5px" }}>Search</button> */}
                            <p style={{ display: "block" }}>Total Number of Sales: {this.state.totalCount}</p>
                            <p style={{ display: "block" }}>Total Sales: {this.state.totalSale}</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "5px" }}>
                        <Link to='/sales/add-new'> <button >Add New Sale</button></Link>
                    </div>
                </div>

                <div style={{ minHeight: "50vh" }}>

                    <table style={{ minWidth: "100vw", textAlign: "center" }}>
                        <thead>
                            <tr style={{ borderBottom: "2px solid black" }}>
                                <th>Sr#</th><th>Date</th><th>Vehicle Number</th><th>Services</th><th>Total Price</th><th>Operations</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.props.data.map(
                                    (detail, index) =>
                                        <TableData sr={index + 1} id={detail.id} date={detail.date} vNumber={detail.vehicleNumber} services={detail.services} totalPrice={detail.totalPrice} delMethod={this.props.deleteMethod} />
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

function TableData(props) {
    return (
        <tr style={{ borderBottom: "1px solid lightgrey" }}>
            <td>{props.sr}</td>
            <td>{props.date}</td>
            <td>{props.vNumber}</td>
            <td>{printServices(props.services)}</td>
            <td>{props.totalPrice}</td>
            <td><button style={{ marginRight: "10px" }} onClick={() => props.delMethod(props.id, 'sales')}>Delete</button>
            {/* <button>Update</button> */}
            </td>
        </tr>
    );
}

function printServices(services) {
    return (
        <>
            {
                services.map(
                    (service, index) => (
                        <div>{service.name + " [" + service.price + " PKR]\n"}</div>
                    )
                )
            }
        </>

    );

}


function calculateTotal(sales) {
    let total = 0;
    sales.map(
        (sale) => {
            total += sale.totalPrice;
        }
    )
    return total;
}




export default Sales;