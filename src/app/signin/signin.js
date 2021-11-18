import {useHistory} from 'react-router-dom'
import './signin.scss';

const SignIn = () => {
    const history = useHistory()

    const handleLogin = (route) => {
        history.push(route)
    }

    return(
        <div className="signin-container">
            SignIn Module
            <p className="text">Click <a className="nav" onClick={() => handleLogin('/dashboard')}>here</a> to get to dashboard home page</p>
            <p className="text">Click <a className="nav" onClick={() => handleLogin('/dashboard/chat')}>here</a> to get to chat page of the dashboard</p>
            <p className="text">Click <a className="nav" onClick={() => handleLogin('/signup')}>here</a> to get to signup page</p>
        </div>
    )
}

export default {
    routeProps: {
        path: '/',
        component: SignIn,
    },
    name: 'SignIn',
}