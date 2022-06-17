import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error from './pages/Error';
import './css/style.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useSelector} from 'react-redux';

function App() {
  const loggedIn = useSelector(state => state.user.loggedIn)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={loggedIn ? <Profile /> : <Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
