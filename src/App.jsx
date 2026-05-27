import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar එක import කරන්න
import Home from './pages/Home';
import AppsPage from './pages/AppsPage';

function App() {
  return (
    <BrowserRouter basename="/sdesign">
      <Navbar /> {/* මෙතනින් Navbar එක දාන්න */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AppsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;