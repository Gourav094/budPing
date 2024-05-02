import MessageContainer from './MessageContainer'
import SideBar from './SideBar'
import { useSelector } from "react-redux";
import SideMenu from './SideMenu';
const Chat = () => {

  const theme = useSelector((state) => state.user.theme);

  return (
    <div className='grid grid-cols-8 max-h-screen overflow-hidden' data-theme = {theme}>
      {/* <div className="top-0 left-0"> */}
        {/* </div> */}
        <div className='col-span-2 border-r border-gray-400 flex'>
            <SideMenu/>
            <SideBar/>
        </div>
        <div className='col-span-6'>
            <MessageContainer/>
        </div>
    </div>
  )
}

export default Chat