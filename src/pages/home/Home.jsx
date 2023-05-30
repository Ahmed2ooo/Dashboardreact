import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./Home.scss"
import Widget from '../widget/Widget'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Feature/>
          <Chart aspect={2/1} title="Last sex month(Number)" />
        </div>
            <div className="listContainer">
               <div className="listTittle">
                <Table/>
               </div>
            </div>
        </div> 
    </div>
  )
}

export default Home