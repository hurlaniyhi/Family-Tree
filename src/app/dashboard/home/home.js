import './home.scss';

const Home = () => {
    return(
        <div className="dashboard-home-container">
            Dashboard Home Module
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