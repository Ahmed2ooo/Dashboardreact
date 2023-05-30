import "./New.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useState } from "react";

const New = ({title,inputs}) => {
  const {File,setFile}=useState("")
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
              File ? URL.createObjectURL(File):"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            }
            alt=""
            />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <UploadFileIcon className="icon" />
              </label>
              <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>

                {inputs.map((input)=>(
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input type={input.type}placeholder={input.placeholder} />
                    </div>   
                ))}
              <button>Send</button>
                
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New