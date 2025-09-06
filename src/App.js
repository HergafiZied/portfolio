import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components//Footer';
import Home from './pages/Home';
import Designs from './pages/Designs';
import ThreeD from './pages/ThreeD';
import Contact from './pages/Contact';

function App() {
  return (
    <Router >
      < div className="min-h-screen bg-white" >
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/3d" element={<ThreeD />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div >
    </Router >
  );
}

export default App;