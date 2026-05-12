import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Cep from "./pages/Cep";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/">Login</Link>
          <Link to="/users">Usuários</Link>
          <Link to="/cep">CEP</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/cep" element={<Cep />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;