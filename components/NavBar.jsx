import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";
import { Avatar, AppBar, Toolbar, Typography, Button } from "@mui/material";
const NavBar = () => {
  const { user } = useContext(UserContext);
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#223581" }}>
      <Toolbar className="container">
        <div className="d-flex align-items-center flex-grow-1">
          <Button
            color="inherit"
            component={Link}
            to="/"
            style={{ textDecoration: "none", marginRight: "auto" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/articles"
            style={{ textDecoration: "none", marginLeft: "auto", marginRight: "auto" }}
          >
            Articles
          </Button>
          {user.username ? (
            <Link
              to="/users"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                marginLeft: "auto"
              }}
            >
              <Avatar
                alt={user.name}
                src={user.avatar_url}
                style={{ marginLeft: "10px", cursor: "pointer" }}
              />
            </Link>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/users"
              style={{ textDecoration: "none", marginLeft: "auto" }}
            >
              Users
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
