import Gendercheck from './gender.jsx';
const Signup = () => {
    return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div
              className='w-80 p-6 rounded-lg shadow-md bg-amber-800 bg-clip-padding 
              backdrop-filter backdrop-blur-large bg-opacity-50'>
              <h1 className='text-3x1 font-mono text-center text-brown-100'>Sign up for BearChat 🧸</h1>
              <form>
              <div>
                    <input type='text' placeholder='Full name' className='w-full input input-bordered h-10 font-mono' />
                    <input type='text' placeholder='Username' className='w-full input input-bordered h-10 font-mono' />
                    <input type='text' placeholder='Password' className='w-full input input-bordered h-10 font-mono' />
                    <input type='text' placeholder='Confirm password' className='w-full input input-bordered h-10 font-mono' />
                </div>
                <Gendercheck />
                <a href='#' className='text-sm font-mono hover:underline hover:text-amber-700 mt-1 inline-block'>
                    Already have an account? {"Login"}
                </a>
                <div>
                    <button className='btn font-mono btn-block bg-white btn-sm mt-2'>Sign up</button>
                </div>
              </form>
          </div>
      </div>
    );
  };
  
  export default Signup;

  // starter code
//   import Gendercheck from './gender.jsx';
// const Signup = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div
//               className='w-80 p-6 rounded-lg shadow-md bg-amber-800 bg-clip-padding 
//               backdrop-filter backdrop-blur-large bg-opacity-50'>
//               <h1 className='text-3x1 font-mono text-center text-brown-100'>Sign up for BearChat 🧸</h1>
//               <form>
//               <div>
//                     <input type='text' placeholder='Full name' className='w-full input input-bordered h-10 font-mono' />
//                     <input type='text' placeholder='Username' className='w-full input input-bordered h-10 font-mono' />
//                     <input type='text' placeholder='Password' className='w-full input input-bordered h-10 font-mono' />
//                     <input type='text' placeholder='Confirm password' className='w-full input input-bordered h-10 font-mono' />
//                 </div>
//                 <Gendercheck />
//                 <a href='#' className='text-sm font-mono hover:underline hover:text-amber-700 mt-1 inline-block'>
//                     Already have an account? {"Login"}
//                 </a>
//                 <div>
//                     <button className='btn font-mono btn-block bg-white btn-sm mt-2'>Sign up</button>
//                 </div>
//               </form>
//           </div>
//       </div>
//     );
//   };
  
//   export default Signup;