import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";





function App() {
  return (

    <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <div> Foooter </div>



  </Router>




  );
}

export default App;