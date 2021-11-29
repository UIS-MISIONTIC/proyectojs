import React from 'react';

import HomePasajero from "../components/HomePasajero";

import { Navigate } from 'react-router-dom';

const Home = () =>{

    if (localStorage.getItem('data')  == undefined){

        return <Navigate to = "/"/>;

    }
    return (
        <>

        <HomePasajero/>


        </>
    )
}

export default Home