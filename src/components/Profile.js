import breathe from "../breathe.png"
import { LuBell } from "react-icons/lu";
import userProfile from "../Avatar.png";
import { IoChevronDown } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";


const Profile = ()=>{
    return(
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <div style={{display:"flex", alignItems:"center", gap:"40px"}}>
            <div style={{alignItems:"center", display:"flex", gap:"20px"}}>
                <img src={breathe} style={{height:"28px", padding:"7px 0"}}></img>
                <p>View Name</p>
            </div>        
            <p style={{border:"1px solid #C9C9C9", borderRadius:"4px", display:"flex", gap:"10px" , padding:"8px 16px"}}><HiOutlineBuildingOffice2/>North India Region <IoChevronDown/></p>
        </div>
        <div style={{display:"flex", alignItems:"center", gap:"16px"}}>
            <LuBell />
            <p>John Doe</p>
            <img style={{width:"32px"}} src={userProfile}></img>
        </div>
    </div>);
}

export default Profile;