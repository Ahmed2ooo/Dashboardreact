import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { color } from "@mui/system";

const Widget = ({type}) => {
    let data;

    const amount =100;
    const diff=20;
    
    switch (type){
        case "user":
            data={
                title:"USER",
                isMoney:false,
                link:"See all users",
                icon:<PersonOutlineIcon 
                className="icon"
                 style={{
                    color:"crimson",
                    backgroundColor:"rgba(255, 0, 0, 0.2)"
                }} />,
            };
            break;

            case "order":
            data={
                title:"ORDER",
                isMoney:false,
                link:"View all ordering",
                icon:<ShoppingCartIcon 
                className="icon"
                style={{
                    color:"goldenrod",
                    backgroundColor:"rgba(218, 165, 32, 0.2)"
                }}
                />,
            };
            break;

            case "earning":
            data={
                title:"EARNING",
                isMoney:true,
                link:"View all erarning",
                icon:<CurrencyExchangeIcon 
                className="icon"
                style={{
                    color:"green",
                    backgroundColor:"rgba(0, 128, 0, 0.2)"
                }}
                 />,
            };
            break;

            case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See details",
                icon:<AccountBalanceWalletIcon className="icon"
                style={{
                    color:"purple",
                    backgroundColor:"rgba( 128, 0, 128, 0.2)"
                }}
                />,
            };
            break;

            default:
                break;
    }






  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isMoney && "$"}{amount}
            </span>
            <span className="link"> {data.link} </span>
        </div>
        <div className="right">
            <div className="persantage negtive">
                <KeyboardArrowUpIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget