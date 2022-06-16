import React from 'react';
import { Link } from 'react-router-dom';

const Invalid = () => {
    return (
        <>
            <h2 style={{ textAlign: "center" }}>Invalid URL!</h2>
            <div style={{textAlign:"center"}}>
                <Link to="/">Home</Link>
            </div>
        </>
    );
}

export default Invalid;