import MessageContainer from './MessageContainer'
import SideBar from './SideBar'
import { useSelector } from "react-redux";
const Chat = () => {

  const theme = useSelector((state) => state.user.theme);

  return (
    <div className='grid grid-cols-4' data-theme = {theme}>
        <div className='col-span-1 border-r'>
            <SideBar/>
        </div>
        <div className='col-span-3'>
            <MessageContainer/>
        </div>
    </div>
  )
}

export default Chat