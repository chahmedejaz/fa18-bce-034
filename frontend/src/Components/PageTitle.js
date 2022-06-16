import React from 'react';
const PageTitle = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default PageTitle;