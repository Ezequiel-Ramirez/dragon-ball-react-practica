import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRouter = ({component: Component, auth, ...rest}) => {
    return <Route {...rest} element={()=><Component/>} />;
}

export default PrivateRouter
