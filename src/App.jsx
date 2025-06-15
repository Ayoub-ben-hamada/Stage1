import './App.css';
import Profil from "./Profils";
import Compteur from "./Compteur";
import Todo from "./Todo";
import Acceuil from "./pages/Acceuil";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const user = "Ayoub";

  return (
    <div className="app">
      <h1>Hello !!! {user}</h1>
      <h2>Bienvenue dans mon application React</h2>
      
      <Profil/>
      <Compteur/>
      
      <div style={{ marginTop: '50px' }}>
        <Todo />
      </div>

      <div style={{ marginTop: '150px' }}>
        <BrowserRouter>
          <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
            <Link 
              to="/" 
              style={{ padding: '10px', marginRight: '10px', textDecoration: 'none' }}
            >
              Accueil
            </Link>
            <Link 
              to="/apropos" 
              style={{ padding: '10px', marginRight: '10px', textDecoration: 'none' }}
            >
              À propos
            </Link>
            <Link 
              to="/contact" 
              style={{ padding: '10px', textDecoration: 'none' }}
            >
              Contact
            </Link>
          </nav>

          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;