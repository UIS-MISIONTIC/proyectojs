import React from 'react';

import Table from "../components/Table";

import { Navigate } from 'react-router-dom';

const Landing = () =>{

    var contentLanding = <Navigate to = "/register"/>

    if (localStorage.getItem('data') != undefined){

        contentLanding = <Table/>

    }
    return (
        <>

        {contentLanding}


        </>
    )
}

export default Landing