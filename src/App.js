//The export default prefix is a standard JavaScript syntax (not specific to React). It lets you mark the main function in a file so that you can later import it from other files.
//by using title as a prop we can change the name of the title whenever desired
//here we can change the title and about  using props

import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";



export default function App() {

  //here we have made mode as state variable in app.js so we are able to change the look og of our main page
  //

  const [mode,setMode]=useState('light');

   //state variable for alert
   const[alert,setAlert]=useState("");
   const showAlert=(message,type)=>{
       setAlert({
         msg:message,
         type:type
       })
       setTimeout(()=>{
          setAlert("");
       },1500);
   }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#031a40';
      showAlert("Dark mode has been enabled","Success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","Success");
    }
  }

  return (
  <>  
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try textUtlils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
          </Route>
      </Switch>
        
      </div>
      {/* <hr></hr> */}
      {/* <About/> */}
      </Router>  
  </>     
  )
}