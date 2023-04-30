import './App.css';
import Alert from './Components/Alert';
import Textform from './Components/Textform';
import Navbar from './Components/Navbar';
import {useState} from "react";

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1200)
  };
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode is enabled successfully","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled successfully","success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert}> </Navbar>
    <Alert alert={alert}></Alert>
    <Textform heading="Enter your text here for Analysis" mode={mode} toggleMode={toggleMode} showAlert={showAlert}></Textform>

    </>
  );
}

export default App;
