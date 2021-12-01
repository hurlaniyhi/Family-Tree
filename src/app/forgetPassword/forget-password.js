import './forgetPassword.scss'

const ForgetPassword = () => {
    return(
        <div className="forgetPassword-container">
            ForgetPassword Module
        </div>
    )
}

export default {
    routeProps: {
        path: '/forget-password',
        component: ForgetPassword,
    },
    name: 'Forget Password',
}