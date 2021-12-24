import { useEffect, useReducer } from 'react';

import { AuthContext } from './context/AuthContext'
import { AuthReducers } from './components/reducers/AuthRedeucers';
import LoginRouter from './routers/LoginRouter'

const init = () => {
  return JSON.parse(localStorage.getItem('isAuthenticated')) || { isAuthenticated: false }
};

const App = () => {
  const [isAuthenticated, dispatch] = useReducer(AuthReducers, {}, init);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return <AuthContext.Provider value={{ isAuthenticated, dispatch }}>
    <LoginRouter />
  </AuthContext.Provider>
}

export default App
