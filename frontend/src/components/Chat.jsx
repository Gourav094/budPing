import MessageContainer from './MessageContainer'
import SideBar from './SideBar'

const Chat = () => {
  return (
    <div className='grid grid-cols-4' data-theme="dark">
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