
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewListIcon from '@mui/icons-material/ViewList';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const{dispatch} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchIcon/>

        </div>
        <div className="items">
          <div className="item">
           <LanguageIcon className="icon" />
           English
          </div>
          <div className="item">
          <DarkModeIcon className="icon"
          onClick = {()=>dispatch({type:"TOGGLE"})}
          style={{cursor :"pointer"}}
          />
           
          </div>
          <div className="item">
          <FullscreenExitIcon className="icon"/>
           
          </div>
          <div className="item">
          <NotificationAddIcon className="icon"/>
          <div className="counter">1</div>
            
          </div>
          <div className="item">
          <ChatBubbleOutlineIcon className="icon"/>
           <div className="counter">2</div>
          </div>
          <div className="item">
          <ViewListIcon className="icon"/>
          
          </div>
          <div className="item">
          <img src={require('./ahmed.jpg')} className="avatar" />
          
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar