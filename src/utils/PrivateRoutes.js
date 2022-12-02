import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    let authentication = {'token': false}
    return(
        authentication.token ? <Outlet /> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes