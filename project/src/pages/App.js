import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthProvider } from './components/AuthContext';
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Container from "./layout/Container";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Acervo from "./pages/Acervo";
import Aluguel from "./pages/Aluguel";
import ListLivros from "./pages/Listlivros"
import sobreNos from "./pages/sobreNos"

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
                <Route path="/Acervo" element={<Acervo />} />
                <Route path="/Aluguel/:id" element={<Aluguel />} />
                <Route path="/ListLivros" element={<ListLivros />} />
                <Route path="/SobreNos" element={<SobreNos />} />
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
