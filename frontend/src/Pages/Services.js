import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import {Link} from 'react-router-dom';
import { getServiceRecords } from '../Service/servicesAPI';

class Services extends Component {
    state = {
        Details: this.props.data
    }

    async componentDidMount()
    {
        const clone = {...this.state}
        clone.Details = await getServiceRecords();
        this.setState(clone);
    }

    static getDerivedStateFromProps(props, state)
    {
        state.Details = props.data
    }


    handleDelete = (id) => {
        let clone = [...this.state.Details];
        clone = clone.filter((detail) => (detail.id !== id));
        this.setState({ Details: clone });
    }

    render() {
        return (
            <>
                <PageTitle title="Services" />

                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "5px" }}>
                     <Link to={'/services/add-new'}> <button>Add New Service</button></Link>
                </div>

                <div style={{ minHeight: "50vh" }}>

                    <table style={{ minWidth: "100vw", textAlign: "center" }}>
                        <thead>
                            <tr style={{ borderBottom: "2px solid black" }}>
                                <th>Sr#</th><th>Name</th><th>Price (PKR)</th><th>Operations</th>

                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.Details.map(
                                    (detail, index) =>
                                        <TableData sr={index + 1} id={detail.id} name={detail.name} price={detail.price} delMethod={this.props.deleteMethod} initializeUpdateService={this.props.initializeUpdateService}/>
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
        <tr>
            <td>{props.sr}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><button style={{ marginRight: "10px" }} onClick={() => props.delMethod(props.id, 'services')}>Delete</button>
            <Link to='/services/update'><button onClick={()=>props.initializeUpdateService(props.id)}>Update</button></Link>
            </td>
        </tr>
    );
}


export default Services;