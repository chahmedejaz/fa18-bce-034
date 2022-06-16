import React from 'react';

const ServiceCard = (props) => {
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={props.pic} class="card-img-top" style={{height: "250px", weight:"200px"}} alt="Service Picture"/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.price}</p>
                </div>
        </div>
    );
}

export default ServiceCard;