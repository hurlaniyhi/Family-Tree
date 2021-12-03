import React,{useRef, useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AuthContext from '../../providers/state-managers/authenticationManager'
import './signin.scss';

const SignIn = () => {
    const history = useHistory()
    const {updateWithLoginData} = useContext(AuthContext)
    const [data, setData] = useState({username: '', email: ''})

    const handleLogin = (route) => {
        history.push(route)
    }

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    function handleSubmit(){
        updateWithLoginData(data)
    }
   
    return(
        <div className="signin-container">
            SignIn Module
            <p className="text">Click <a className="nav" onClick={() => handleLogin('/dashboard')}>here</a> to get to dashboard home page</p>
            {/* <p className="text">Click <a className="nav" onClick={() => handleLogin('/dashboard/chat')}>here</a> to get to chat page of the dashboard</p>
            <p className="text">Click <a className="nav" onClick={() => handleLogin('/signup')}>here</a> to get to signup page</p> */}

            <input placeholder="Enter username" name="username" onChange={handleInput} />
            <input placeholder="Enter email" name="email" onChange={handleInput} />
            <button onClick={handleSubmit}>Login</button>
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

//const memoizedComponent = React.memo(SignIn)