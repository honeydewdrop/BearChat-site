import { MdOutlinePersonSearch } from "react-icons/md";
import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long.");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      {/* Controlled input with value and onChange */}
      <input
        type="text"
        placeholder="Search..."
        className="input font-mono rounded-badge"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-amber-700 text-white">
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