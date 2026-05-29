import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar එක import කරන්න
import Home from './pages/Home';
import AppsPage from './pages/AppsPage';
import DesignPage from './pages/DesignPage';
import Contact from './pages/Contact'; // Contact page එක import කරන්න
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter basename="/sdesign">
      <Navbar /> {/* මෙතනින් Navbar එක දාන්න */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/contact" element={<Contact />} /> {/* මෙන්න මේ Route එක තියෙන්න ඕනේ */}
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;