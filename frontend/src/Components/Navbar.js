import Logo from "./Logo";
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="navColor">
            <div className="container-fluid" >
                <Link className="navbar-brand" to="/"><Logo /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item " >
                            <Link className="nav-link " to="/" ><span>Home</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/services"><span>Services</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/sales"><span>Sales</span></Link>
                        </li>
                        {/* <li className="nav-item ">
                            <Link className="nav-link" to="/expenses"><span>Expenses</span></Link>
                        </li> */}
                        {/* <li className="nav-item ">
                            <Link className="nav-link" to="/business-insights"><span>Business Insights</span></Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;



