import {useState} from "react";
import { BsShare } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiBuilding } from "react-icons/bi";
import Profile from "./Profile";
import Tracker from "./Tracker";

const MainTableSection = (props)=>{
    const [tracker, setTracker] = useState("tracker");
    const trackerToggler = (e)=>{
        if(e.target.innerText === "Data Entry"){
            setTracker("tracker");
        }
        else{
            setTracker(null);
        }
    }

    return (
    <div style={{background:"white", color:"#000", display:"flex", flexDirection:"column", flex:"1", alignItems:"start"}}>
      <div style={{display:"flex", flexDirection:"column", gap:"20px", padding:"24px", width:"96.8%"}}>
        <Profile />
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{display:"flex", gap:"48px"}}>
            <p style={{display:"flex", alignItems:"center", gap:"4px"}} onClick={trackerToggler}><BiBuilding />Data Entry</p>
            <p style={{display:"flex", alignItems:"center", gap:"4px"}} onClick={trackerToggler}><BiBuilding />Tracker</p>
          </div>
          <div style={{display:"flex", gap:"16px"}}>
            <p style={{display:"flex", gap:"12px", margin:"0px", alignItems:"center"}}>For: <span style={{color:"#000", borderRadius:"4px", padding:"8px 16px", border:"1px solid #C9C9C9"}}>FY 2023-24 <IoChevronDown/></span></p>
            <button style={{background:"#2E9844", borderRadius:"4px", padding:"8px 16px", color:"white", border:"1px solid", outline:"none", fontSize:"15px",fontWeight:"700"}}>Submit For Approval</button>
          </div>
        </div>
      </div>
      {tracker?(<div style={{width:"100%"}}>
      <table style={{width:"100%"}}>
        <tbody>
      <tr className="table-row">
        <th><input type="checkbox" className="table-input"/></th>
        <th>ASSESSMENT TITLE</th>
        <th>TYPE</th>
        <th>NO. OF SUPPLIERS</th>
        <th>SCORE</th>
        <th>RISK CLASSIFICATION</th>
        <th>STATUS</th>
        <th>RESULT</th>
        <th>ACTIONS</th>
      </tr>
      <tr className="table-row">
        <td>
        <input type="checkbox" className="table-input"/>
        </td>
        <td>Assessment 1</td>
        <td>BRSR</td>
        <td>20</td>
        <td>-</td>
        <td><span style={{color: "#f1c40f"}}>Medium</span></td>
        <td>Pending</td>
        <td>-</td>
        <td className="table-actions"><BsShare /><RiDeleteBinLine /></td>
      </tr>
      <tr className="table-row">
        <td>
        <input type="checkbox" className="table-input"/>
        </td>
        <td>Assessment 2</td>
        <td>BRSR</td>
        <td>25</td>
        <td>98</td>
        <td><span style={{color: "#f1c40f"}}>Low</span></td>
        <td>Complete</td>
        <td>View</td>
        <td className="table-actions"><BsShare /><RiDeleteBinLine /></td>
      </tr>
      <tr className="table-row">
        <td>
        <input type="checkbox" className="table-input"/>
        </td>
        <td>Assessment 3</td>
        <td>BRSR</td>
        <td>35</td>
        <td>22</td>
        <td><span style={{color: "#f1c40f"}}>High</span></td>
        <td>Complete</td>
        <td>View</td>
        <td className="table-actions"><BsShare /><RiDeleteBinLine /></td>
      </tr>
      <tr className="table-row">
        <td>
        <input type="checkbox" className="table-input"/>
        </td>
        <td>Assessment 3</td>
        <td>Custom</td>
        <td>49</td>
        <td>23</td>
        <td><span style={{color: "#f1c40f"}}>Medium</span></td>
        <td>Complete</td>
        <td>View</td>
        <td className="table-actions"><BsShare /><RiDeleteBinLine /></td>
      </tr>
      <tr className="table-row">
        <td>
        <input type="checkbox" className="table-input"/>
        </td>
        <td>Assessment 3</td>
        <td>Custom</td>
        <td>100</td>
        <td>42</td>
        <td><span style={{color: "#f1c40f"}}>Medium</span></td>
        <td>Complete</td>
        <td>View</td>
        <td className="table-actions"><BsShare /><RiDeleteBinLine /></td>
      </tr>
      </tbody>
    </table>
  
      </div>):(<Tracker />)}
    </div>)
  }
  export default MainTableSection;