
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =() => {
    if( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(3 20 62)';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  // const greenMode =() => {
  //   if( mode === 'light'){
  //     setMode('green');
  //     document.body.style.backgroundColor = '#003615';
  //     showAlert("Green mode has been enabled","success");
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Light mode has been enabled","success");
  //   }
  // }
  
  return (
    <>  
    {/* <Navbar title="Textutils" aboutText="About Text" /> */}
    
    {/* <Router> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert = {alert} />
    <div className="container my-3" >
      {/* <Routes> */}
        {/* <Route exact path="/" element ={<TextForm showAlert= {showAlert} heading="Enter the text to analyze below" mode = {mode} />}/> */}
        <TextForm showAlert= {showAlert} heading="Enter the text to analyze below" mode = {mode} />
        {/* <Route exact path="/about" element = {<About />}/> */}
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
