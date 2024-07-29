import { MdOutlinePersonSearch } from "react-icons/md";
import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

// functional component for the search bar
const Searchbar = () => {
  // state to manage the search term input
  const [search, setSearch] = useState("");
  
  // hook to set the selected conversation
  const { setSelectedConversation } = useConversation();
  
  // hook to fetch all conversations
  const { conversations } = useGetConversations();

  // handle form submission for searching
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior
    
    if (!search) return; // do nothing if search term is empty
    
    if (search.length < 3) {
      // show error if search term is less than 3 characters
      return toast.error("Search term must be at least 3 characters long.");
    }
    
    // find conversation matching the search term regardless of case sensitivity
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    
    if (conversation) {
      // set the found conversation as selected and clear search input
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      // show error if no matching conversation is found
      toast.error("No such user found.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      {/* controlled input with value and onChange handler */}
      <input
        type="text"
        placeholder="Search..."
        className="input font-mono rounded-badge"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // update search state on change
      />
      <button type="submit" className="btn btn-circle bg-amber-700 text-white">
        {/* search icon */}
        <MdOutlinePersonSearch className="w-7 h-7 outline-none" />
      </button>
    </form>
  );
};

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