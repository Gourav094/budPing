import { IoSearchOutline } from "react-icons/io5";
import useGetConversation from "../utils/useGetConversation";
import Conversation from "./Conversation";
import { useSelector} from "react-redux"

const SideBar = () => {
    const theme = useSelector(state => state.user.theme)
    
    const {loading,conversation} = useGetConversation()

    
  return (
    <div className='p-4 max-h-screen rounded-lg shadow-lg overflow-auto'>
        <div className='flex items-center w-full rounded-lg mb-4' data-theme={theme === 'dark' ? 'dim':'nord'}>
            <span className='px-3'><IoSearchOutline /></span>
            <input className='outline-none py-2 px-1 bg-transparent' type='text' placeholder='Search'/>
        </div>
        <div className="h-screen flex-1">
            <Conversation conversation = {conversation} loading = {loading}/>
        </div>
    </div>
  )
}

export default SideBar