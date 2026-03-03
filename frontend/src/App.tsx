import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Cep from "./pages/Cep";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link> |{" "}
        <Link to="/users">Usuários</Link> |{" "}
        <Link to="/cep">CEP</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cep" element={<Cep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;