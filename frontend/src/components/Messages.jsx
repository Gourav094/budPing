

const Messages = ({chatDirection,message}) => {
  return (
    <div className='py-1'>
        <div className='chat chat-start'>
            <div className='chat-image avatar'>
              <p className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center"> M </p>
            </div>
            <div className='chat-bubble '>
                Hii! what's up?
            </div>
        </div>
        <div className={`chat ${chatDirection}`}>
            <div className='chat-image avatar'>
              <p className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center"> M </p>
            </div>
            <div className='chat-bubble '>
                {message}
            </div>
        </div>
    </div>
  )
}

export default Messages