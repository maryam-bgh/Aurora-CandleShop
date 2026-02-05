import { Link } from "react-router-dom"
import Logo from "../assets/images/Logo.png"
import Search from "./Search"
import Login from "./Login"
const Navbar = () => {
    return (
        <nav className="w-full flex justify-between items-center px-10 bg-white/60 backdrop-blur-md drop-shadow-gray-800 text-[#5E4B43] ">
            {/* Logo */}
            <div>
                <Link to="/" >
                    <img src={Logo} alt="Candle Shop Logo" className="w-25" />
                </Link>
            </div>
            {/* Links */}
            <div className="flex gap-10">
                <Link to="/" className="hover:text-[#B89A87]">Home</Link>
                <Link to="/products" className="hover:text-[#B89A87]">Products</Link>
                <Link to="/about" className="hover:text-[#B89A87]">About</Link>
                <Link to="/contact" className="hover:text-[#B89A87]">Contact</Link>
            </div>
            <div>
                {/* Search */}
                <Search />

                {/* Login */}
                <Login />
            </div>



        </nav>

    )
}
export default Navbar