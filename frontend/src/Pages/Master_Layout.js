import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Master_Layout = (props) => {
    const MyComponent = props.myComponent;
    return (
        <>
            <div className="row">
                <div className="col">
                    <Navbar />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <MyComponent salesRecord={props.salesRecord} data={props.data} deleteMethod={props.deleteMethod} addMethod={props.addMethod} initialService={props.initialService} initializeUpdateService={props.initializeUpdateService} title={props.title}/>
                </div>
            </div>            

            <div className="row">
                <div className="col">
                    
                </div>
            </div>

        </>
    );
}

export default Master_Layout;