import React, { Component } from 'react';
import { getExpenses_arr } from '../Components/Expenses_arr';
import PageTitle from '../Components/PageTitle';


let totalExpense = 0;

class Expenses extends Component {
    state = {}

    constructor(props)
    {
        super(props);

        this.state = {
            totalCount: this.props.data.length,
            totalExpense: calculateTotal(this.props.data)
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        let clone = { ...state};
        clone.totalCount = props.data.length;
        clone.totalExpense = calculateTotal(props.data);
        return clone;
    }

    render() {
        return (
            <>
                <PageTitle title="Expenses" />

                <div>
                    <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "5px" }}>
                        <div>
                            <p style={{ display: "block" }}><b>Search by Date:</b></p>
                            <input type="datetime" name="searchDate" id="searchDate" />
                            <button style={{ marginLeft: "5px" }}>Search</button>
                            <p style={{ display: "block" }}>Total Number of Expenses: {this.state.totalCount}</p>
                            <p style={{ display: "block" }}>Total Expenses: {this.state.totalExpense}</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "5px" }}>
                        <button>Add New Expense</button>
                    </div>
                </div>

                <div style={{ minHeight: "50vh" }}>

                    <table style={{ minWidth: "100vw", textAlign: "center" }}>
                        <thead>
                            <tr style={{ borderBottom: "2px solid black" }}>
                                <th>Sr#</th><th>Date</th><th>Expense Type</th><th>Description</th><th>Total Amount</th><th>Operations</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.props.data.map(
                                    (detail, index) =>
                                        <TableData sr={index + 1} id={detail.id} date={detail.date} type={detail.type} description={detail.description} totalPrice={detail.totalPrice} delMethod={this.props.deleteMethod} />
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
            <td>{props.type}</td>
            <td>{props.description}</td>
            <td>{props.totalPrice}</td>
            <td><button style={{ marginRight: "10px" }} onClick={() => props.delMethod(props.id, 'expenses')}>Delete</button>
            {/* <button>Update</button> */}
            </td>
        </tr>
    );
}


function calculateTotal(expenses) {
    let total = 0;
    expenses.map(
        (expense) => {
            total += expense.totalPrice;
        }
    )
    return total;
}




export default Expenses;