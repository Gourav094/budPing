import { IoChatboxEllipsesOutline, IoSend } from "react-icons/io5"
import { MdOutlineAttachFile } from "react-icons/md";
import Messages from "./Messages"
import { useState } from "react";

const MessageContainer = () => {
    const [chatSelected,setChatSelected] = useState(true)

  return !chatSelected ? (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
        <h1 className="text-2xl pb-2">Welcome UserName !!</h1>
        <h3 className="text-xl tracking-wide">Select a chat to start messaging</h3>
        <span className="text-4xl"><IoChatboxEllipsesOutline /></span>
    </div>
  ) :(
        <div className="py-2">
            <div className='py-2 px-4 rounded flex gap-4 items-center ' data-theme="nord">
                <p className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center"> M </p>
                <div>
                    <h3 className="text-black font-medium ">Gourav garg </h3>
                    <p className='text-xs text-green-500'>online</p>
                </div>
            </div>

            <div className="px-4 py-1 h-[550px] flex-1 overflow-auto">
                <Messages chatDirection="chat-start" message="Hii! How are you"/>            
                <Messages chatDirection="chat-end" message="Hii! How are you"/>            
                <Messages chatDirection="chat-start" message="Hii! How are you"/>            
                <Messages chatDirection="chat-start" message="Hii! How are you"/>            
                <Messages chatDirection="chat-end" message="Hii! How are you"/>            
                <Messages chatDirection="chat-start" message="Hii! How are you"/>            
                <Messages chatDirection="chat-start" message="Hii! How are you"/>            
                <Messages chatDirection="chat-end" message="Hii! How are you"/>            
                <Messages chatDirection="chat-start" message="Hii! How are you"/>            
                <Messages chatDirection="chat-end" message="Hii! How are you"/>            
            </div>

            <div className="mx-4 flex items-center  rounded-lg px-4" data-theme="nord">
                <button className="inset-y-0 end-0"><MdOutlineAttachFile /></button>
                <input className="text-gray-50 py-3 px-2 w-full outline-none bg-transparent"  placeholder="Send a message" type="text"/>
                <button className="inset-y-0 end-0"><IoSend/></button>
            </div>
        </div>
  )
}

export default MessageContainer