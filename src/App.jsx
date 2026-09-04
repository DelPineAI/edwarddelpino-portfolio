import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Contact } from './components/Contact/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { Developer } from './pages/Developer';
import { Philosophy } from './pages/Philosophy';
import { More } from './pages/More';

function App() {
  return (
    <div className={styles.App}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Developer />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<Developer />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
