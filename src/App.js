
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Location from './pages/Location';
import Careers from './pages/Careers';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Rides from './pages/Rides';
import { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';



function App() {
  useEffect(() => {
    document.title = 'scoot';
  });

  return (
    <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
    <Router>
      <Header/>
      <Routes>
      <Route path='/account' element={<Rides />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/careers' element={<Careers />}/>
      <Route path='/location' element={<Location />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/' element={<Home />}/>
      
      </Routes>
      <Footer/>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
