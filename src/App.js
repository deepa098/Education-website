import './App.css';
import '@splidejs/react-splide/css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import Login from './LoginComponent/Login'
import Reset from './LoginComponent/Reset'
import EmailSent from './LoginComponent/EmailSent';
import Register from './LoginComponent/Register';
import CreatePassword from './LoginComponent/CreatePassword';
import Course1 from './Component/Course1';
import UserProfile from './LoginComponent/UserProfile';

// import { Splide, SplideSlide } from '@splidejs/react-splide';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/CreatePassword' element={<CreatePassword />} />
        <Route path='/Reset' element={<Reset />} />
        <Route path='/EmailSent' element={<EmailSent />} />
        <Route path='/Course1' element={<Course1 />} />
        <Route path='/UserProfile' element={<UserProfile />} />
      </Routes>
    </Router>
     
    </>
  );
}

export default App;


