import './signup.scss'

const SignUp = () => {
    return(
        <div className="signup-container">
            SignUp Module
        </div>
    )
}

export default {
    routeProps: {
        path: '/signup',
        component: SignUp,
    },
    name: 'SignUp',
}