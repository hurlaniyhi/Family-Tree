import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import modules from './app-modules'
import './app.scss'

const AppRoutes = () => {
    
    return(
        <Router>
            <Switch>
                {modules.map(module => (
                    module.name === "SignIn" ?
                    <Route exact {...module.routeProps} key={module.name} /> :
                    <Route {...module.routeProps} key={module.name} />
                ))}
                <Redirect from="/:id" to="/" />
            </Switch>
        </Router>
    )
}

//npm install --save react-router-dom@5.2.0

//==== For new version of react-router-dom =====
// Switch is replaced with Routes
//<Route exact path="/" element={<Home/>}/>  this is the way to use Route
//<Route path="*" element={<NotFound/>}/>  // redirect for invalid route
//"react-router-dom": "^6.0.2",

export default AppRoutes