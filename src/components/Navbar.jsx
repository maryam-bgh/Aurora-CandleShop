const Navbar = () => {
    return (
        <nav>
            {/* Links */}
            <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                <img src="" alt="logo" />
            </div>
        </nav>

    )
}
export default Navbar