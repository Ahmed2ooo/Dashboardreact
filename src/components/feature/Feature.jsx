import  './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Feature = () => {
  return (
    <div className='feature'>
        <div className="top">
    <        h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
              <div className="fetureChart">
               <CircularProgressbar value={70}text={"70%"} strokeWidth={5} />
              </div>
              <p className='title'>Total sales made today</p>
              <p className="amount">420$</p>
              <p className="desc">rjvnkkrifkfcdvmkvmrvvvmkbrpfkrkfrofkldsdlmlmlds</p>
              <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <ArrowDropDownIcon fontSize='small' />
                    <div className="itemResult">
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemTitle">Last week</div>
                    <ArrowDropDownIcon fontSize='small' />
                    <div className="itemResult positive">
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemTitle">Mounth</div>
                    <ArrowDropUpIcon fontSize='small' />
                    <div className="itemResult nagtive">
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Feature