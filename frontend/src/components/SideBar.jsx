import { IoSearchOutline } from "react-icons/io5";
import useGetConversation from "../utils/useGetConversation";
import Conversation from "./Conversation";
import { useSelector} from "react-redux"
import useGetActiveConversation from "../utils/useGetActiveConversation";
import { useEffect, useRef, useState } from "react";
import AllConversation from "./AllConversation";

const SideBar = () => {
    const theme = useSelector(state => state.user.theme)
    const [showAllUsers,setShowAllUsers] = useState(false)

    const {loading,conversation} = useGetActiveConversation()
    const {load,allConversation} = useGetConversation()

    const containerRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setShowAllUsers(!setShowAllUsers);
        }
    };
      if (showAllUsers) {
          document.addEventListener('mousedown', handleClickOutside);
      }
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [showAllUsers]);

  return (
    <div className='p-4 max-h-screen rounded-lg shadow-lg overflow-auto w-full'>
        <div className='flex items-center w-full rounded-lg mb-4' data-theme={theme === 'dark' ? 'dim':'nord'}>
            <span className='px-3'><IoSearchOutline /></span>
            <input className='outline-none py-2 px-1 bg-transparent w-full' type='text' placeholder='Search'/>
            <p  ref={containerRef} className="cursor-pointer text-2xl px-4 pb-1 hover:text-blue-500" onClick={() => setShowAllUsers(!showAllUsers)}>+</p>
        </div>
        {
            showAllUsers && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 max-h-screen overflow-auto">
                <div className="bg- rounded-lg shadow-lg max-w-md mx-auto mt-12 p-2  flex-1" data-theme={theme !== 'dark' ? 'dim':'nord'}>
                  <AllConversation load = {load} allConversation={allConversation} showAllUsers = {showAllUsers} setShowAllUsers = {setShowAllUsers}/>
                </div>
              </div>
        )}

        <div className="h-screen flex-1">
            <Conversation conversation = {conversation} loading = {loading}/>
        </div>
    </div>
  )
}

export default SideBar