import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { AmbientBackground } from './components/AmbientBackground/AmbientBackground';
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress';
import { Developer } from './pages/Developer';
import { Philosophy } from './pages/Philosophy';
import { Treatise } from './pages/Treatise';
import { Piece } from './pages/Piece';
import { More } from './pages/More';

function App() {
  return (
    <div className={styles.App}>
      <ScrollToTop />
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Developer />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/philosophy/treatise" element={<Treatise />} />
        <Route path="/philosophy/:slug" element={<Piece />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<Developer />} />
      </Routes>
    </div>
  );
}

export default App;
