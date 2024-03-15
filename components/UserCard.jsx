import { UserContext } from "../context/User"
import { useContext, useState } from "react"
const UserCard = ({username, name, img}) => {
    const{user, setUser} = useContext(UserContext)
    const[signIn, setSignIn] = useState(false)
    
    const handleSignIn = () => {
        if(!signIn){
            setUser({...user, username: username, name: name, avatar_url: img})
        } else {
            setUser({...user, username: "", name : "", avatar_url: ""})
        }
        setSignIn(!signIn)
    }
    
return(
    <div className="card" style={{ width: "200px", margin: "10px"}} >
        <img src={img} className="card-img-top" alt={username} style={{ width: "100%", height: "auto" }} />
        <div className="card-body">
            <p className="card-title">{username}</p>
            <p className="card-text">{name}</p>
            <button className="btn btn-primary" onClick={handleSignIn}>{signIn ? "Sign out" : "Sign in" }</button>
            {user.username === username && (<p> You are logged in as {username}!</p>)}
        </div>
  </div>
)
}
export default UserCard