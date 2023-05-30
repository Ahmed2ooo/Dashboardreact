import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonIcon from '@mui/icons-material/Person';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link}from "react-router-dom"
import { DarkModeContext} from "../../context/darkModeContext";
import { useContext } from "react";


const Sidebar = () => {
    const{dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
        
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
               <span className="logo">Ahmedadmin</span>
            </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon/>
                        <span>Dachboard</span>
                    </li>
                    
                    <p className="title">List</p>
                    <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <PersonIcon/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration: "none"}}>
                    <li>
                        <ProductionQuantityLimitsIcon/>
                        <span>Product</span>
                    </li>
                    </Link>
                    <li>
                        <BorderStyleIcon/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <AirportShuttleIcon/>
                        <span>Dilevery</span>
                    </li>
                    <p className="title">Usefull</p>
                    <li>
                        <InsertChartIcon/>
                        <span>Status</span>
                    </li>
                    <li>
                        <NotificationAddIcon/>
                        <span>Noneifacation</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <SettingsSystemDaydreamIcon/>
                        <span>System helth</span>
                    </li>
                    <li>
                        <PsychologyIcon/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon/>
                        <span>Setting</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <PortraitIcon/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon/>
                        <span>Log Out</span>
                    </li>
                </ul>
        </div>
        <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})} ></div>
        <div className="colorOption" onClick={()=> dispatch({type:"Dark"})}></div>
        
        </div>
    </div>
  )
}

export default Sidebar