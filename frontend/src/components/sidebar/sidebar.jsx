import Searchbar from "./Searchbar.jsx"
import Conversations from "./Conversations.jsx"
import LogoutButton from "./LogoutButton.jsx"
const Sidebar = () => {
    return ( 
        <div className='border-r border-slate-500 p-4 flex-col overflow-auto'>
        <Searchbar />
        <div className='divider px-3'></div>
        <Conversations />
        <LogoutButton />
    </div>
    );
};

export default Sidebar;

// import Searchbar from "./Searchbar.jsx"
// import Conversations from "./Conversations.jsx"
// const Sidebar = () => {
//     return ( 
//         <div>
//         <Searchbar />
//         <div className='divider px-3'></div>
//         <Conversations />
//         {/* <LogoutButton /> */} *
//     </div>
//     );
// };

// export default Sidebar;