import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PageTitle from '../Components/PageTitle';
import "./Style.css";
import { Link } from 'react-router-dom';
import { addNewService } from '../Service/servicesAPI';

const FormBorderStyle = { height: "300px", width: "700px", border: "2px solid black", borderRadius: "5px" };


const AddService = (props) => {
    
    const initialName = props.initialService.name;
    const initialPrice =props.initialService.price;
    const title = props.title;
    return (
        <Formik
            initialValues={{name: String(initialName), price: String(initialPrice)}}
            validationSchema={Yup.object(
                {
                    name: Yup.string()
                        .max(20, "Service name cannot exceed 20 characters!")
                        .required("Service name cannot be empty!"),
                    price: Yup.string()
                        .matches(/[0-9]/, "Service price can only contatains numeric values!")
                        .required("Service Price cannot be empty")
                }
            )}
            onSubmit={
                async (record, {resetForm}) => {

                    if (props.title === 'Add') {
                        await props.addMethod(record, 'services');
                    }
                    else{
                        await props.addMethod(record);
                    }
                    
                    resetForm();
                    alert("Service has been added!");
                }
            }
        >
            {
                (props) => (
                    <form onSubmit={props.handleSubmit}>
                        <PageTitle title= {title+' Service'} />
                        <div className='parent' style={{ display: "flex", justifyContent: "center" }}>
                            <div className='form' style={{ ...FormBorderStyle, display: "flex", justifyContent: "center" }}>

                                <div className="fields" style={{ marginTop: "20px" }}>

                                    <div className='field'>
                                        <label style={{ marginRight: "5px" }}>Service Name:</label>
                                        <Field name='name' type='text' />

                                        <ErrorMessage name='name'>
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
                                        <label style={{ marginRight: "12px" }}>Service Price:</label>
                                        <Field name='price' type='text' />
                                        <ErrorMessage name='price'>
                                            {
                                                (msg) => (
                                                    <div style={{ color: "red" }}>
                                                        {msg}
                                                    </div>
                                                )
                                            }
                                        </ErrorMessage>
                                    </div>

                                    <div className='buttons' style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                                        <div>
                                            <button type='submit' style={{ backgroundColor: "lightcyan", width: "100px", marginRight: "10px" }} disabled={!props.isValid}>{title}</button>
                                        </div>
                                        <div>
                                            <Link to='/services'> <button style={{ backgroundColor: "lightcyan", width: "100px" }}>Cancel</button></Link>
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




export default AddService;