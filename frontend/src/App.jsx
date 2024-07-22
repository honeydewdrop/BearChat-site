import {Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { useAuthContext } from './context/AuthContext';
import Home from './page/home/home.jsx';
import Login from './page/login/login.jsx';
import Signup from './page/signup/signup.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
const { authUser } = useAuthContext();
return (
  <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        {/* protected routes to make sure non auth users cant get to home. or if auth go to home */}
        <Route path = '/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path = '/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path = '/signup' element={authUser ? <Navigate to="/" /> : <Signup /> }/>
      </Routes>
      <Toaster />
      </div>
    
);
}

export default App;
