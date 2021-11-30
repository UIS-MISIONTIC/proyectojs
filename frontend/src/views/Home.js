import React from 'react';

import HomePasajero from "../components/HomePasajero";

import { Navigate } from 'react-router-dom';

const Home = ()  => {

var contentHome = <Navigate to = "/register"/>

    if (localStorage.getItem('data') != undefined){

        contentHome = <HomePasajero/>

    }
    return (
        <>

        {contentHome}


        </>
    )
}

export default Home