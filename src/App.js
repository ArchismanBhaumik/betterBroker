import './App.css';
import { Routes, Route } from "react-router-dom";
import AppBody from './Component/AppBody';
import Login from './Component/Login';


function App() {
  
  return (
    <div className="App">
    <AppBody/>
      <Routes>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
