import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { useAuthContext } from './context/AuthContext';
import Home from './page/home/home.jsx';
import Login from './page/login/login.jsx';
import Signup from './page/signup/signup.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
    const { authUser } = useAuthContext(); // get auth user from context

    return (
        <div className='p-4 h-screen flex items-center justify-center'>
            <Routes>
                {/* protected routes to make sure non-auth users can't access home. 
                    if user is authenticated, redirect to home */}
                <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />

                {/* if user is authenticated, redirect to home when trying to access login */}
                <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />

                {/* if user is authenticated, redirect to home when trying to access signup */}
                <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />} />
            </Routes>
            <Toaster /> {/* toaster for displaying notifications */}
        </div>
    );
}

export default App;
