import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import { getProfit_array } from '../Components/Profit_arr';


class Business_Insights extends Component {
    state = {}

    constructor(props)
    {
        super(props);

        this.state = {
            profits: getProfit_array(),
            totalCount: getProfit_array().length
        }
    }

    render() {
        return (
            <>
                <PageTitle title="Business Insights" />

                <div>
                    <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "5px" }}>
                        <div>
                            {/* <p style={{ display: "block" }}><b>Search by Date:</b></p>
                            <input type="datetime" name="searchDate" id="searchDate" />
                            <button style={{ marginLeft: "5px" }}>Search</button> */}
                            <p style={{ display: "block" }}>Total Number of Records: {this.state.totalCount}</p>
                        </div>
                    </div>
                </div>

                <div style={{ minHeight: "50vh" }}>

                    <table style={{ minWidth: "100vw", textAlign: "center" }}>
                        <thead>
                            <tr style={{ borderBottom: "2px solid black" }}>
                                <th>Sr#</th><th>Date</th><th>Number of Cars</th><th>Number of Bikes</th><th>Total Sale</th>
                                {/* <th>Total Expense</th><th>Total Earning</th> */}
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.profits.map(
                                    (detail, index) =>
                                        <TableData sr={index + 1} id={detail.id} date={detail.date} noOfCars={detail.noOfCars} noOfBikes={detail.noOfBikes} totalSale={detail.totalSale} totalExpense={detail.totalExpense} totalEarning={detail.totalEarning} delMethod={this.handleDelete} />
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
            <td>{props.noOfCars}</td>
            <td>{props.noOfBikes}</td>
            <td>{props.totalSale}</td>
            {/* <td>{props.totalExpense}</td>
            {props.totalEarning >= 0 ? 
                <td style={{color:"green", fontWeight:"bolder"}}>{props.totalEarning}</td> : 
                <td style={{color:"red", fontWeight:"bolder"}}>{props.totalEarning}</td>
            } */}
        </tr>
    );
}

export default Business_Insights;