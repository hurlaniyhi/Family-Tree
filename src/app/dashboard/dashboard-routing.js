import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import dashboardModules from './dashboard-modules'
import Chat from './chat/chat'
import './dashboard.scss'

const DashboardRoutes = () => {
    
    return(
        <Switch>
            {dashboardModules.map(module => (
                module.name === "DashboardHome" ?
                <Route exact {...module.routeProps} key={module.name} /> :
                <Route {...module.routeProps} key={module.name} />
            ))}
            <Redirect from="/dashboard/:id" to="/dashboard/" />
        </Switch>
    )
}

export default {
    routeProps: {
        path: '/dashboard/',
        component: DashboardRoutes,
    },
    name: 'Dashboard',
}