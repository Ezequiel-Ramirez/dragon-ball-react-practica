import React, { useContext } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import AppRouter from './AppRouter';
import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../pages/LoginScreen';

const LoginRouter = () => {

    const { isAuthenticated } = useContext(AuthContext);
    return (
        <div>
            <Router>
                <AppRouter />
                <Routes>
                    <Route exact path="/login" element={<LoginScreen />} />
                </Routes>
            </Router>
        </div>
    )
}

export default LoginRouter
