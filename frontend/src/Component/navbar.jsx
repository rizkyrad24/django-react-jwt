import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../reducer/Actions";

const Navbar = ({ logout, isAuthenticated }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mywebsite.co.id</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    { isAuthenticated? (
                        <>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="change/password/">Change Password</Link>
                        </li>
                        <li className="nav-item">
                        <span className="nav-link active" aria-current="page" onClick={ logout } id="logout">Logout</span>
                        </li>
                        </>
                    ): (
                        <>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="login/">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="signup/">Signup</Link>
                        </li>
                        </>
                    ) }
                    
                </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = ( state ) => {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}

export default connect(mapStateToProps, { logout })(Navbar)