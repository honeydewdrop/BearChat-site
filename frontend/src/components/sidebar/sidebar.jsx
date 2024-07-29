import Searchbar from "./Searchbar.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

// functional component for the sidebar
const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex-col overflow-auto'>
            {/* search bar for finding conversations */}
            <Searchbar />
            
            {/* divider for visual separation */}
            <div className='divider px-3'></div>
            
            {/* list of conversations */}
            <Conversations />
            
            {/* button for logging out */}
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