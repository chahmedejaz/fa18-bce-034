import React from 'react';
const DeleteUpdateTable = (props) => {
    let temp ={};
    return (
        <div style={{ minHeight: "50vh" }}>

            <table style={{ minWidth: "100vw", textAlign: "center" }}>
                <thead>
                    <tr style={{ borderBottom: "2px solid black" }}>
                        <th>Sr#</th>{props.theadings.map(
                            (heading) => (<th>{heading}</th>)
                        )}<th>Operations</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        props.details.map(
                            (detail, index) =>
                            (
                                <>
                                    {temp = {...detail}}
                                    {/* {delete temp.id} */}
                                    {/* <h2>{temp.id}</h2> */}
                                    {/* <TableData sr={index + 1} id={detail.id} detail={temp} delMethod={props.delMethod}/> */}
                                </>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

function TableData(props) {
    return (
        <tr>
            <td>{props.sr}</td>
            {props.detail.map(
                (d) => (<td>{d}</td>)
            )}
            <td><button style={{ marginRight: "10px" }} onClick={() => props.delMethod(props.id)}>Delete</button><button>Update</button></td>
        </tr>
    );
}

export default DeleteUpdateTable;