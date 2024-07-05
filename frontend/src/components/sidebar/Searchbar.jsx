import { MdOutlinePersonSearch } from "react-icons/md";
const Searchbar = () => {
    return  (
        <form className='flex items-center gap-2'> {/* flex so button and bar next to each other */}
            <input type='text' placeholder='Search...' className='input font-mono rounded-badge' />
            <button type='submit' className='btn btn-circle bg-amber-700 text-white'>
            <MdOutlinePersonSearch className='w-7 h-7 outline-none'/>
            </button>
        </form>
    )
}

export default Searchbar;

// import { MdOutlinePersonSearch } from "react-icons/md";
// const Searchbar = () => {
//     return  (
//         <form className='flex items-center gap-2'> {/* flex so button and bar next to each other */}
//             <input type='text' placeholder='Search...' className='input rounded-badge' />
//             <button type='submit' className='btn btn-circle bg-amber-700 text-white'>
//             <MdOutlinePersonSearch className='w-7 h-7 outline-none'/>
//             </button>
//         </form>
//     )
// }

// export default Searchbar;