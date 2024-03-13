import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/User';
const NavBar = () => {
    const {user} = useContext(UserContext)
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <div className="navbar-brand">
            <Link to="/">Home</Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/articles">Articles</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                </li>
                {user.username && ( 
                    <p className="nav-item">{user.username}</p>
                )}
            </ul>
        </div>
    </div>
</nav>
)
}
export default NavBar
