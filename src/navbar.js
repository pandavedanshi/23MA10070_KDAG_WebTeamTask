import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            
            <div className="links">
                <Link to ="/about" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    cursor: "pointer"
                }}>About</Link>
                <Link to ="/" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    cursor: "pointer"
                }}>Blogs</Link>

                <Link to ="/cources" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    cursor: "pointer"
                }}>Cources</Link>

                <Link to ="/vedios" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    cursor: "pointer"
                }}>References</Link>
                
                <Link to ="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    cursor: "pointer"
                }}>Sign In</Link>
                
            </div>
        </nav>
     );
}

export default Navbar;