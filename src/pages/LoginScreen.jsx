import React, { useContext } from 'react'

import {AuthContext} from '../context/AuthContext'
import {authTypes} from '../types/authTypes'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext);
    
    const navigat = useNavigate();
    const handleLogin = () => {
        dispatch({type: authTypes.LOGIN});
        navigat({ pathname: '/' }) 
    }
    return (
    <div className='container mt-5 text-center'>
    <img src='/assets/animate.gif' alt='loading'/>
    <h1 className='my-3'>Login Screen</h1>
    <button className='btn btn-primary' onClick={handleLogin}>Login</button>
    </div>

    )
}

export default LoginScreen
