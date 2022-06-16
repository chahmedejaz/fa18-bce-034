import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import OrderDetails from './OrderDetails';

const Book_a_Service = (props) => {
    return (
        <Formik
            initialValues={{ customerName: '', vehicleType: '', services: [], bookingDate: '', numPlate: '', newTextField: '' }}
            validationSchema={Yup.object({
                customerName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .matches(/^[A-Za-z]+$/, "Customer name can only contain alphabets!")
                    .required('Please enter the name!'),

                vehicleType: Yup.string()
                    .required('Please select the vehicle type!'),

                services: Yup.array()
                    .min(1, 'Please choose at least one service!'),

                bookingDate: Yup.string()
                    .required('Please choose the booking date'),

                numPlate: Yup.string()
                    .matches(/(png)/, 'Upload the PNG image!')
                    .required('Please upload the image!'),

                newTextField: Yup.string()
                    .required('Please Enter the value')
                    .matches(
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                    )

            })}
            onSubmit={(values) => {
                console.log(values);
                props.method(values);

            }}
        >
            {
                (props) => (
                    <form onSubmit={props.handleSubmit}>
                        <div className="container" style={{ backgroundColor: "white", padding: "0" }}>

                            <label htmlFor="customerName">Customer Name</label>
                            <div className="form-control">
                                <Field name="customerName" type="text" />
                                <ErrorMessage name="customerName" />
                            </div>

                            <label htmlFor="radio">Vehicle Type</label>
                            <div className="form-control">
                                <label className='radio-button'>
                                    <Field type="radio" name="vehicleType" value="Car" />
                                    Car
                                </label>
                                <label className='radio-button'>
                                    <Field type="radio" name="vehicleType" value="Bike" />
                                    Bike
                                </label>
                                <label className='radio-button'>
                                    <Field type="radio" name="vehicleType" value="Rikshaw" />
                                    Rikshaw
                                </label>
                                <ErrorMessage name="vehicleType" />
                            </div>

                            <label htmlFor="checkBox">Services:</label>
                            <div className="form-control">
                                <label className='check-box'>
                                    <Field type="checkbox" name="services" value="Wash" />
                                    Wash
                                </label>
                                <label className='check-box'>
                                    <Field type="checkbox" name="services" value="General Service" />
                                    General Service
                                </label>
                                <label className='check-box'>
                                    <Field type="checkbox" name="services" value="Oil Change" />
                                    Oil Change
                                </label>
                                <ErrorMessage name="services" />
                            </div>

                            <label htmlFor="bookingDate">Booking Date</label>
                            <div className="form-control">
                                <label htmlFor="bookingDate">Booking Date</label>
                                <Field as='select' name="bookingDate" type="text">
                                    <option key={""} value={""} >
                                        {"Select from the available date"}
                                    </option>
                                    <option key={"20"} value={20} >
                                        {20}
                                    </option>
                                    <option key={"21"} value={21} >
                                        {21}
                                    </option>
                                    <option key={"22"} value={22} >
                                        {22}
                                    </option>
                                </Field>
                                <ErrorMessage name="bookingDate" />
                            </div>

                            <label htmlFor="numplate">Number Plate Image:</label>
                            <div className="form-control">
                                <Field type='file' name='numPlate' />
                                <ErrorMessage name="numPlate" />
                            </div>

                            <label htmlFor="newText">New Text Field</label>
                            <div className="form-control">
                                <Field type='text' name='newTextField' />
                                <ErrorMessage name="newTextField" />
                            </div>

                            <div className="row">
                                <div className="col">
                                    <button type="submit" disabled={!props.isValid}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                )
            }
        </Formik>
    );
};

export default Book_a_Service;