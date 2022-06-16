import React from 'react';
import ServiceCard from './ServiceCard';

const service1 = {
    pic: "./images/service1.jpg",
    title: "Car Wash",
    price: "200 PKR"
}
const service2 = {
    pic: "./images/service2.jpg",
    title: "Oil Change",
    price: "100 PKR"
}
const service3 = {
    pic: "./images/service3.png",
    title: "General Service",
    price: "400 PKR"
}



const FeaturedServices = () => {
    return (
        <>
            <div style={{ margin: "0 500px" }}>
                <h1>Featured Services</h1>
            </div>
            <div className="row ">
                <div className="col" style={{ padding: "0 60px" }}>
                    <ServiceCard pic={service1.pic} title={service1.title} price={service1.price} />
                </div>
                <div className="col" style={{ padding: "0 60px" }}>
                    <ServiceCard pic={service2.pic} title={service2.title} price={service2.price} />
                </div>
                <div className="col" style={{ padding: "0 60px" }}>
                    <ServiceCard pic={service3.pic} title={service3.title} price={service3.price} />
                </div>
            </div>

        </>
    );
}

export default FeaturedServices;