import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { emailVerification } from "../reducer/Actions";

const EmailVerification = ({ emailVerification }) => {
    const [ status, setStatus ] = useState (false);
    const { key } = useParams();
    const handlingSubmit = (e) => {
        e.preventDefault();
        emailVerification( key );
        setStatus(true)
    }
    if (status) {
        return <Navigate to={"../login/"}></Navigate>
    }
    return (
        <div className="main-box">
            <h2 className="text-center mb-4">Activate Account</h2>
            <h5 className="text-center mb-4">
                Click the bellow link to activate your account
            </h5>
            <form className="mb-3" onSubmit={e => handlingSubmit(e)}>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Activate Account</button>
                </div>
            </form>
        </div>
    )
}

export default connect(null, { emailVerification })(EmailVerification);