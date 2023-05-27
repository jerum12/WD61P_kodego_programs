import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NotFound from './components/pages/NotFound';
import OnePage from './components/pages/OnePage';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<OnePage />} />
        {/* <Route exact path="/" element={<Navigate to="/Home" />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
