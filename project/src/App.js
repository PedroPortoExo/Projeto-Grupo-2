import "./App.css";
// import Form from './components/Form';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';
// import Home from "./components/pages/Home";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Login from "./pages/Login";
import Home from "./components/pages/Home"


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
