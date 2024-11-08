import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Container from "./layout/Container";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Aluguel from "./pages/Aluguel";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <header className="App-header">
            <NavBar />
          </header>
          <br />
          <main>
            <Container>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Aluguel/:id" element={<Aluguel />} />
                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </Container>
          </main>
          <br />
          <br />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
