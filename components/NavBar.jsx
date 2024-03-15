import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";
import { Avatar, AppBar, Toolbar, Typography, Button } from "@mui/material";
const NavBar = () => {
  const { user } = useContext(UserContext);
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#223581" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "auto",
          }}
        >
          Home
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/articles"
          style={{ textDecoration: "none", marginRight: "10px" }}
        >
          Articles
        </Button>

        <>
        {user.username ? (
          <Link
            to="/users"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={user.name}
              src={user.avatar_url}
              style={{ marginLeft: "10px", cursor: "pointer" }}
            />
          </Link>
        ):
        (
          <Button
          color="inherit"
          component={Link}
          to="/users"
          style={{ textDecoration: "none", marginRight: "10px" }}
        >
          Users
        </Button>
        )}
        </>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
