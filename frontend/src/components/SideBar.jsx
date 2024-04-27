import { IoSearchOutline } from "react-icons/io5";
const SideBar = () => {
  return (
    <div className='p-4 h-screen rounded-lg shadow-lg'>
        <div className='flex items-center w-full rounded-lg mb-4' data-theme="nord">
            <span className='px-3'><IoSearchOutline /></span>
            <input className='outline-none py-2 px-1 bg-transparent' type='text' placeholder='Search'/>
        </div>
        <div>
            <div className='p-2 flex items-center gap-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
                <p className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center"> M </p>
                <div>
                    <h3 className="text-g font-medium ">Gourav garg </h3>
                    <p className="text-xs text-gray-500">Hii this is new message</p>
                </div>
            </div>
            <div className='p-2 flex items-center gap-4 rounded cursor-pointer hover:bg-gray-200'>
                <p className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center"> M </p>
                <div>
                    <h3 className="text-g font-medium ">Gourav garg </h3>
                    <p className="text-xs text-gray-500">Hii this is new message</p>
                </div>
            </div>
            <div className='p-2 flex items-center gap-4 rounded cursor-pointer hover:bg-gray-200'>
                <p className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center"> M </p>
                <div>
                    <h3 className="text-g font-medium ">Gourav garg </h3>
                    <p className="text-xs text-gray-500">Hii this is new message</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar