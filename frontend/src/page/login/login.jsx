import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false); // state to track visibility

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div
                className='w-full p-6 rounded-lg shadow-md bg-orange-300 bg-clip-padding 
                backdrop-filter backdrop-blur-large bg-opacity-50'>
                <h1 className='text-3x1 font-mono text-center text-black'>
                    login
                    <span className='text-black'> to bearchat 🐻</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type='text' 
                            placeholder='username' 
                            className='w-full input input-bordered h-10 font-mono' 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className='relative'>
                            <input 
                                type={passwordVisible ? 'text' : 'password'} // toggle between text and password
                                placeholder='password' 
                                className='w-full input input-bordered h-10 font-mono pr-10' // add padding-right for the eye icon
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button 
                                type='button'
                                className='absolute inset-y-0 right-0 px-3 flex items-center text-gray-500'
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                {passwordVisible ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12.553A2.55 2.55 0 0012.5 10a2.55 2.55 0 00-2.5 2.553A2.55 2.55 0 0012.5 15a2.55 2.55 0 002.5-2.447zM1.5 12C1.5 12 5.5 6 12 6s10.5 6 10.5 6-4 6-10.5 6S1.5 12 1.5 12z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12.553A2.55 2.55 0 0012.5 10a2.55 2.55 0 00-2.5 2.553A2.55 2.55 0 0012.5 15a2.55 2.55 0 002.5-2.447zM1.5 12C1.5 12 5.5 6 12 6s10.5 6 10.5 6-4 6-10.5 6S1.5 12 1.5 12z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <Link 
                        to={"/signup"} 
                        className='text-sm font-mono hover:underline hover:text-amber-700 mt-2 inline-block'
                    >
                        don't have an account? {"sign up"}
                    </Link>
                    <div>
                        <button 
                            className='btn font-mono btn-block bg-white btn-sm mt-2'
                            disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : 'login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;


//START CODE
// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div
//               className='w-full p-6 rounded-lg shadow-md bg-orange-300 bg-clip-padding 
//               backdrop-filter backdrop-blur-large bg-opacity-50'>
//               <h1 className='text-3x1 font-mono text-center text-black'>Login
//               <span className='text-black'> to BearChat 🐻</span>
//               </h1>
//               <form>
//                   <div>
//                       <input type='text' placeholder='Username' className='w-full input input-bordered h-10 font-mono' />
//                       <input type='text' placeholder='Password' className='w-full input input-bordered h-10 font-mono' />
//                   </div>
//                   <a href='#' className='text-sm font-mono hover:underline hover:text-amber-700 mt-2 inline-block'>
//                       Don't have an account? {"Sign up"}
//                   </a>
//                   <div>
//                       <button className='btn btn-block btn-sm mt-2'>Login</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     );
//   };
  
//   export default Login;