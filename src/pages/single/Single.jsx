import "./Single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainar">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img  
              src="https://cdn.mind-diagnostics.org/uploads/mind-diagnostics/images/image/url/11-traits-of-a-high-value-woman-1_.jpg"
              className="itemImg"
              alt=""
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jone123@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+970 592322111</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">Gaza Rafha,TalSultan</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Palstine</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending(Last sex month)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single