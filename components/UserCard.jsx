import { UserContext } from "../context/User"
import { useContext} from "react"
import { useEffect } from "react"
const UserCard = ({username, name, img}) => {
    const{user, setUser} = useContext(UserContext)
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, [setUser]);
    const handleSignIn = () => {
        const newUser = {...user, username: username, name: name, avatar_url: img}
        setUser(newUser)
        localStorage.setItem("user", JSON.stringify(newUser));
    }
    const handleSignOut = () => {
        setUser({...user, username: "", name : "", avatar_url: ""})
        localStorage.removeItem("user");
    }
    
return(
    <div className="card" style={{ width: "200px", margin: "10px"}} >
        <img src={img} className="card-img-top" alt={username} style={{ width: "100%", height: "auto" }} />
        <div className="card-body">
            <p className="card-title">{username}</p>
            <p className="card-text">{name}</p>
            {user.username === username ? (
          <button className="btn btn-primary" onClick={handleSignOut}>Sign out</button>
        ) : (
          <button className="btn btn-primary" onClick={handleSignIn}>Sign in</button>
        )}
            {user.username === username && (<p> You are logged in as {username}!</p>)}
        </div>
  </div>
)
}
export default UserCard