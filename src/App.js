import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout.js';
import GepelApp from './pages/GepelApp.js';
import RendezApp from './pages/RendezApp.js';
import ValasztApp from './pages/ValasztApp.js';
import Jatekok from './pages/Jatekok.js';
import NoPage from './pages/Jatekok.js';


function App() {
  return (
    <BrowserRouter>
    <header className='App-header'>Tanuljunk Angolul</header>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jatekok />} />
          <Route path="gepel" element={<GepelApp />} />
          <Route path="rendez" element={<RendezApp />} />
          <Route path="valaszt" element={<ValasztApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
