import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="row my-3">
                <div className="col mx-2">
                    <p className='heading'>SHOP</p>
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/"><li>Services Menu</li></a>
                        <a href="/"><li>Promotions</li></a>
                    </ul>
                </div>
                <div className="col">
                    <p className='heading'>INFORMATON</p>
                    <ul>
                        <a href="/"><li>About Us</li></a>
                        <a href="/"><li>Privacy Agreement</li></a>
                        <a href="/"><li>FAQs</li></a>
                    </ul>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-12">
                            <p className='heading'>LOCATION</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p id='address'>36-A Main Bazar Sanda, Krishan Nagar Islampura, Lahore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;