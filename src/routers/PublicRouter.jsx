import React from 'react'
import { Route } from 'react-router-dom'

const PublicRouter = ({path, auth, component: Component, ...rest}) => {
    return <Route {...rest} element={()=><Component/>} />;
}

export default PublicRouter;
