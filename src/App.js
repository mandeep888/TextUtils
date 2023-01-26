import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  const [alert , setAlert] = useState(null);
  const [mode , setMode] = useState('light')

  const showAlert = (message,type)=>{
    setAlert({message:message,
              type:type
            })
    setTimeout(()=>{setAlert(null)},2000)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode has been enabled" , "success");
      document.body.style.backgroundColor ='#4e4e4e';
      // document.title ="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode enabled" , "success");
      // document.title ="TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text Utils" aboutText = "About Text Utils" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      {/* <div className="container">
        <TextForm heading="Enter your text area here" mode={mode} showAlert={showAlert}/>
      </div> */}
      <Routes>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          
        <TextForm heading="Enter your text area here" mode={mode} showAlert={showAlert}/>
      
          </Route> */}
           <Route exact path="/" element={<TextForm heading="Enter your text here" mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About mode = {mode}/>}/>
      </Routes>

      {/* <div className="container my-4">
      <About/>
      </div> */}
      </Router>
    </>
  );
}

export default App;
