import {useContext} from 'react'
import AuthContext from '../../../providers/state-managers/authenticationManager';
import './home.scss';

const Home = () => {
    const {state} = useContext(AuthContext)
    return(
        <div className="dashboard-home-container">
            Dashboard Home Page

            <p>Welcome {state.username}....your email address is {state.email}</p>
        </div>
    )
}

export default {
    routeProps: {
        path: '/dashboard/',
        component: Home,
    },
    name: 'DashboardHome',
}