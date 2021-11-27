import React from "react";

// import MyForm from "./components/MyForm";

// import YourForm from "./components/YourForm";

// import NavBar from "./components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./views/Home";

import Landing from "./views/Landing";

import Register from "./views/Register";

import Search from "./views/SearchOutcomes";

import NotFound from "./views/NotFound";

import NavBar from "./components/NavBar";

function App() {
  return (

    <BrowserRouter>

    <NavBar/>

    <Routes>

    <Route path = "*" element = {<NotFound/>}/>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/landing" element = {<Landing/>}/>
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
