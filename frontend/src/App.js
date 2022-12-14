// import logo from './logo.svg';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Login from './Components/Login'; 
import Header from "./Components/Header";
import Register from "./Components/Register";
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route element ={<Login></Login>} path = "login" />
        <Route element  = {<Register></Register>} path = "register" />
        {/* <Route element ={<Login></Login>} path = "header" /> */}
        
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
