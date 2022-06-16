import { Formik, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import PageTitle from '../Components/PageTitle';
import "./Style.css";
import { Link } from 'react-router-dom';
import { addNewSale } from '../Service/salesAPI';


const FormBorderStyle = { minHeight: "300px", minWidth: "700px", border: "2px solid black", borderRadius: "5px", boxSizing:"border-box" };

const AddNewSale = (props) => {
    return (
        <Formik
            initialValues={{ date: "", vehicleNumber: "", vehicleType: "", serviceNames: [] }}
            
            validationSchema={Yup.object({
                date: Yup.string()
                    .matches(/[0-9]{2}\-[0-9]{2}\-[0-9]{4}/, "Invalid date format!")
                    .required("Date cannot be empty!"),
                vehicleNumber: Yup.string()
                    .required("Vehicle number cannot be empty!"),
                vehicleType: Yup.string()
                    .required("Vehicle type cannot be empty!"),
                serviceNames: Yup.array()
                    .min(1, "Service cannot be empty")
            })}

            onSubmit={
                async (record)=>{
                    let clone = {...record };
                    clone.services = getServiceArray(record.serviceNames, props.data);
                    delete clone.serviceNames;
                    console.log(props);
                    // let id = 1;
                    // if(props.salesRecord.length > 1)
                    // {
                    //     id = props.salesRecord[props.salesRecord.length-1].id + 1;
                    // }

                    // clone.id = id;
                    clone.totalPrice = getTotalPrice(clone.services);

                    await props.addMethod(clone, 'sales');
                    // await addNewSale(clone);

                    alert("Sale record has been saved!");
                }
            }
        >
            {
                (properties) => (
                    <form onSubmit={properties.handleSubmit}>
                        <PageTitle title='Add New Sale' />
                        <div className='parent' style={{ display: "flex", justifyContent: "center" }}>
                            <div className='form' style={{ ...FormBorderStyle, display: "flex", justifyContent: "center", padding: "20px" }}>

                                <div className="fields">

                                    <div className='field'>
                                        <label style={{ marginRight: "90px" }}>Date:</label>
                                        <Field name='date' type='text' />

                                        <ErrorMessage name='date'>
                                            {
                                                (msg) => (
                                                    <div style={{ color: "red" }}>
                                                        {msg}
                                                    </div>
                                                )
                                            }
                                        </ErrorMessage>

                                    </div>


                                    <div className='field'>
                                        <label style={{ marginRight: "12px" }}>Vehicle Number:</label>
                                        <Field name='vehicleNumber' type='text' />
                                        <ErrorMessage name='vehicleNumber'>
                                            {
                                                (msg) => (
                                                    <div style={{ color: "red" }}>
                                                        {msg}
                                                    </div>
                                                )
                                            }
                                        </ErrorMessage>
                                    </div>

                                    <div className='field'>
                                        <label style={{ marginRight: "12px" }}>Vehicle Type:</label>
                                        <div className="radio-buttons">
                                            <label className='radio-button' style={{ marginRight: "5px" }}>
                                                <Field type="radio" name="vehicleType" value="Car" />
                                                Car
                                            </label>
                                            <label className='radio-button'>
                                                <Field type="radio" name="vehicleType" value="Bike" />
                                                Bike
                                            </label>
                                            <ErrorMessage name='vehicleType'>
                                                {
                                                    (msg) => (
                                                        <div style={{ color: "red" }}>
                                                            {msg}
                                                        </div>
                                                    )
                                                }
                                            </ErrorMessage>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label htmlFor="checkBox">Services:</label>
                                        <div className="row">
                                            {
                                                props.data.map(
                                                    (service) => (
                                                        <div className="col-4">
                                                            <label className='check-box'>
                                                                <Field type="checkbox" name="serviceNames" value={service.name} />
                                                                {service.name}
                                                            </label>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>

                                        <ErrorMessage name='serviceNames'>
                                            {
                                                (msg) => (
                                                    <div style={{ color: "red" }}>
                                                        {msg}
                                                    </div>
                                                )
                                            }
                                        </ErrorMessage>
                                    </div>

                                    <div className='buttons' style={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "20px" }}>
                                        <div>
                                            <button type='submit' style={{ backgroundColor: "lightcyan", width: "100px", marginRight: "10px" }} disabled={!properties.isValid}>Add</button>
                                        </div>
                                        <div>
                                            <Link to='/sales'> <button style={{ backgroundColor: "lightcyan", width: "100px" }}>Cancel</button></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </form>
                )
            }
        </Formik>
    );
}

const getServiceArray = (serviceNames, services)=>
{
    const outputServices = [];
    
    serviceNames.forEach(serviceName => {
        outputServices.push(services.find((service)=>(service.name == serviceName)));
    });

    return outputServices;
}

const getTotalPrice = (services)=>
{
    let  total = 0;
    services.forEach(service => {
        total += parseInt(service.price);
    });
    
    return total;
}

export default AddNewSale;