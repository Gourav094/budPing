import { Link } from "react-router-dom"
import headerLogo from "../assets/quickChat.jpg"
const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-20 sticky top-0 bg-violet-100 bg-opacity-80">
        <img className="h-10" src={headerLogo} alt="QuickChat"/>
        <div>
            <ul className="flex items-center gap-6 text-lg font-normal">
                <li className="cursor-pointer hover:text-violet-600 py-1 ">Features</li>
                <li className="cursor-pointer hover:text-violet-600 py-1 ">Privacy</li>
                <Link to={'/login'}><li className="cursor-pointer hover:text-violet-600 py-1 ">Login</li></Link>
                <Link to={'/signup'}><li className="cursor-pointer hover:text-violet-600 py-1 ">Sign up</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header