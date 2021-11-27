import React from "react";

import NavBar from "./components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./views/Home";

import Landing from "./views/Landing";

import Register from "./views/Register";

import Search from "./views/SearchOutcomes";

import NotFound from "./views/NotFound";



function App() {
  return (

    <BrowserRouter>

    <NavBar/>

    <Routes>

    <Route path = "*" element = {<NotFound/>}/>
    <Route path = "/" element = {<Landing/>}/>
    <Route path = "/home" element = {<Home/>}/>
    <Route path = "/register" element = {<Register/>}/>
    <Route path = "/search" element = {<Search/>}/>
    

    </Routes>
    
    </BrowserRouter>

//     <React.Fragment>
// <NavBar></NavBar>

// <MyForm></MyForm>

  
// <YourForm></YourForm>
//     </React.Fragment>
    
  );
}
export default App;
