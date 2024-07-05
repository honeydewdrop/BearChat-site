const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div
            className='w-full p-6 rounded-lg shadow-md bg-orange-300 bg-clip-padding 
            backdrop-filter backdrop-blur-large bg-opacity-50'>
            <h1 className='text-3x1 font-mono text-center text-black'>Login
            <span className='text-black'> to BearChat 🐻</span>
            </h1>
            <form>
                <div>
                    <input type='text' placeholder='Username' className='w-full input input-bordered h-10 font-mono' />
                    <input type='text' placeholder='Password' className='w-full input input-bordered h-10 font-mono' />
                </div>
                <a href='#' className='text-sm font-mono hover:underline hover:text-amber-700 mt-2 inline-block'>
                    Don't have an account? {"Sign up"}
                </a>
                <div>
                    <button className='btn font-mono btn-block bg-white btn-sm mt-2'>Login</button>
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