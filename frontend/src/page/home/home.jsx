import Sidebar from "../../components/sidebar/sidebar.jsx";
import MessageContainer from "../../components/messages/messageContainer.jsx";

const home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-orange-300 bg-clip-padding 
    backdrop-filter backdrop-blur-large bg-opacity-0'>
      {/* render the sidebar component */}
      <Sidebar />
      
      {/* render the message container component */}
      <MessageContainer />
    </div>
  );
}

export default home;
