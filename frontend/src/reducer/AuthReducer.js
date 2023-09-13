import TYPE from "./Type";

const initialState = {
    access: localStorage.getItem('access'),
    isAuthenticated: false,
    user: null,
    message: ""
}

const AuthReducer = (state=initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPE.LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                access: payload.access,
                isAuthenticated: true,
                user: payload.user,
                message: "Login has successed"
            }
        case TYPE.LOGIN_FAIL:
            localStorage.removeItem('access');
            return {
                ...state,
                access: null,
                isAuthenticated: false,
                user: null,
                message: "Login has failed"
            }
        case TYPE.VERIFY_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case TYPE.VERIFY_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        case TYPE.GET_USER_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case TYPE.GET_USER_FAIL:
            return {
                ...state,
                user: null
            }
        case TYPE.REFRESH_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                access: payload.access,
                isAuthenticated: true,
                message: "Refresh token success"
            }
        case TYPE.REFRESH_FAIL:
            localStorage.removeItem('access');
            return {
                ...state,
                access: null,
                isAuthenticated: false,
                user: null,
                message: "Refresh token fail"
            }
        case TYPE.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                message: "Change password success"
            }
        case TYPE.CHANGE_PASSWORD_FAIL:
            return {
                ...state,
                message: "Change password fail"
            }
        case TYPE.SIGNUP_SUCCESS:
            return {
                ...state,
                message: "Verification link has sent to your email"
            }
        case TYPE.SIGNUP_FAIL:
            return {
                ...state,
                message: "Signup fail"
            }
        case TYPE.ACTIVATE_ACCTOUNT_SUCCESS:
            return {
                ...state,
                message: "Your account has been verified"
            }
        case TYPE.ACTIVATE_ACCTOUNT_FAIL:
            return {
                ...state,
                message: "Verification account has failed"
            }
        case TYPE.RESET_SUCCESS:
            return {
                ...state,
                message: "Reset password success"
            }
        case TYPE.RESET_FAIL:
            return {
                ...state,
                message: "Reset password fail"
            }
        case TYPE.SET_SUCCESS:
            return {
                ...state,
                message: "Your new password has been setted"
            }
        case TYPE.SET_FAIL:
            return {
                ...state,
                message: "Set new password failed"
            }
        case TYPE.LOGOUT:
            localStorage.removeItem('access');
            return {
                ...state,
                access: null,
                isAuthenticated: false,
                user: null,
                message: "User has logged out"
            }
        case TYPE.CLOSE_ALERT:
            return {
                ...state,
                message: ""
            }
        case TYPE.GUEST_VIEW:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default AuthReducer;