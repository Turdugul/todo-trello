import Home from "./components/login/Home";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (

       <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </div>
    </Router>
    
  
  );
}

export default App;
