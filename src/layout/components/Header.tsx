import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "vadiun-button"
import React from "react";
import Logo from "../../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import CreateIcon from "@material-ui/icons/Create";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
interface Props {
  toggleSidebar: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledMenuItem = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      fontWeight: "bold",
      color: theme.palette.primary.main,
      textAlign: "initial",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Header = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();

  const onOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const navigateTo = (url: string) => {
    history.push(url);
    setAnchorEl(null);
  };
  return (
    <>
      <div
        className="flex flex-grow shadow-lg border-b-2 border-solid border-gray-100 bg-white"
        style={{ zIndex: 510 }}
      >
        <div className="flex flex-grow justify-between px-3 text-primary items-center h-16">
          <button
            className="lg:hidden mr-4"
            onClick={(e) => props.toggleSidebar(e)}
          >
            <MenuIcon />
          </button>
          <div className="relative mr-auto ml-10 hidden md:inline-flex">
            <input
              type="text"
              className="rounded-full bg-gray-100 border-none outline-none h-8 p-4 pl-12 w-full"
            />
            <SearchIcon className="absolute left-3 top-1" />
          </div>
          <div className="flex gap-3 items-center">
            <div className="hidden md:inline-flex">
              <Button>
                <span className="whitespace-nowrap">How it works</span>
              </Button>
            </div>
            <Button onClick={() => navigateTo("/main/login")}>Login</Button>
            <Button variant="contained">
              <span className="whitespace-nowrap">Sign up</span>
            </Button>
            <div
              className="text-primary-500 cursor-pointer"
              onClick={onOpenProfileMenu}
            >
              <AccountCircleIcon style={{ fontSize: 40 }} />
            </div>
          </div>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        getContentAnchorEl={null}
      >
        <StyledMenuItem onClick={() => navigateTo("/main/profile")}>
          <ListItemIcon>
            <FaceIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => navigateTo("/main/my-ads")}>
          <ListItemIcon>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="My ads" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => navigateTo("/main/create-ad")}>
          <ListItemIcon>
            <PostAddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Create ad" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => navigateTo("/login")}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </Menu>
    </>
  );
};

export default Header;
