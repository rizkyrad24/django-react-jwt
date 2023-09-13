import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { resetPasswordConfirm } from "../reducer/Actions";

const ResetPasswordConfirm = ({ resetPasswordConfirm }) => {
    const [ status, setStatus ] = useState (false);
    const { uid, token } = useParams();
    const [ formData, setFormData ] = useState ({
        new_password1: "",
        new_password2: ""
    });
    const { new_password1, new_password2 } = formData;
    const handlingInput = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    const handlingSubmit = (e) => {
        e.preventDefault();
        resetPasswordConfirm( uid, token, new_password1, new_password2);
        setStatus(true);
    }
    if (status) {
        return <Navigate to={"../login/"}></Navigate>
    }
    return (
        <div className="main-box">
            <h2 className="text-center mb-4">Set Password</h2>
            <form className="mb-3" onSubmit={e => handlingSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="new_password1" className="form-label">New Password</label>
                    <input name="new_password1" value={new_password1} onChange={e => handlingInput(e)} type="password" className="form-control" id="new_password1" placeholder="New password ..."/>
                </div>
                <div className="mb-3">
                    <label htmlFor="new_password2" className="form-label">Re New Password</label>
                    <input name="new_password2" value={new_password2} onChange={e => handlingInput(e)} type="password" className="form-control" id="new_password2" placeholder="Re new password ..."/>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Set Password</button>
                </div>
            </form>
        </div>
    )
}

export default connect(null, { resetPasswordConfirm })(ResetPasswordConfirm);