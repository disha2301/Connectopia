import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Connectopia</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <SettingsApplicationsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search Here" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
        <div className="user">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQEvnmlTNQG2Fw/profile-displayphoto-shrink_800_800/0/1655374614192?e=1700092800&v=beta&t=eM9uz5Cbg3TaetshGl2ksHhkmc91pkABKMT-jPR1FfM"
            alt=""
          />
          <span>Disha</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
