import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { changePassword } from "../reducer/Actions";

const ChangePassword = ({ isAuthenticated, changePassword }) => {
    const [ formData, setFormData ] = useState ({
        new_password1: "",
        new_password2: "",
        old_password: ""
    });
    const { new_password1, new_password2, old_password } = formData;
    const handlingInput = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    const handlingSubmit = (e) => {
        e.preventDefault();
        changePassword( new_password1, new_password2, old_password );
    }
    if ( !isAuthenticated && !localStorage.getItem('access') ) {
        return <Navigate to={"../login"}></Navigate>
    }
    return (
        <div className="main-box">
            <h2 className="text-center mb-4">Change Password</h2>
            <form className="mb-3" onSubmit={e => handlingSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="new_password1" className="form-label">New Password</label>
                    <input name="new_password1" value={new_password1} onChange={e => handlingInput(e)} type="password" className="form-control" id="new_password1" placeholder="New password ..."/>
                </div>
                <div className="mb-3">
                    <label htmlFor="new_password2" className="form-label">Re New Password</label>
                    <input name="new_password2" value={new_password2} onChange={e => handlingInput(e)} type="password" className="form-control" id="new_password2" placeholder="Re new password ..."/>
                </div>
                <div className="mb-3">
                    <label htmlFor="old_password" className="form-label">Old Password</label>
                    <input name="old_password" value={old_password} onChange={e => handlingInput(e)} type="password" className="form-control" id="old_password" placeholder="Old password ..."/>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Change Password</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}

export default connect(mapStateToProps, { changePassword })(ChangePassword);