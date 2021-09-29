import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { useAuthService } from "app/auth/services/AuthService";

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

export const Header = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const authService = useAuthService();
  const onOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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
        <Link to="/main/profile">
          <StyledMenuItem>
            <ListItemIcon>
              <FaceIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </StyledMenuItem>
        </Link>
        <StyledMenuItem onClick={authService.logout}>
          <ListItemIcon>
            <FaceIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </StyledMenuItem>
      </Menu>
    </>
  );
};
