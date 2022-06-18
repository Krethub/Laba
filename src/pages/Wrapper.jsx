import React from 'react';
import {Outlet} from "react-router-dom";
import {NavigationBar} from "../components";

const Wrapper = ({user, setUser}) => {
    return (
        <>
            <NavigationBar user={user} setUser={setUser}/>
            <Outlet/>
        </>
    );
};

export default Wrapper;