import "./App.css";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, getIdToken, signInWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import world from "./world.png"
import breathe_logo from "./breathe_logo.png"
import breathe from "./breathe.png"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3sbP2MmykBfwlW2xKr4M4E323MWpFGBA",
  authDomain: "message-3afac.firebaseapp.com",
  databaseURL: "https://message-3afac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "message-3afac",
  storageBucket: "message-3afac.appspot.com",
  messagingSenderId: "98769367700",
  appId: "1:98769367700:web:a17d2c368d5d96701f7a81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [login, setLogin] = useState(false);
  const [isLogInSuccessFul, setIsloginSuccessFul] = useState(false)

  return (
    <div className="App">

      {isLogInSuccessFul ? <><SideNav></SideNav>
      <MainTableSection></MainTableSection></>
      : <div className="login-section">
            <MainContent />
      {!login?
      <SignUpSidebar login={login} setLogin={setLogin}/>:
      <LoginComponent login={login} setLogin={setLogin} setIsloginSuccessFul={setIsloginSuccessFul}/>
      }
      </div>  
    }
    </div>
  );
}

const SideNav = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const navToggler = () => {
    setIsOpen(!isOpen);
  };

  const sidebarStyle = {
    width: isOpen ? '250px' : '0',
    overflow: 'hidden',
    transition: 'width 0.5s ease',
    padding:0
  };

  const logoSectionStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const mainNavStyle = {
  };

  return (
    <div style={sidebarStyle} className="sidenav">
      <div style={logoSectionStyle} className="logo-section">
        <img className="sidenav-logo" src={breathe_logo} alt="Logo" />
        {isOpen
          ? <FaCircleChevronLeft className="sidenav-toggler" onClick={navToggler} />
          : <FaCircleChevronRight className="sidenav-toggler close-toggler" onClick={navToggler} />
        }
      </div>
      <div style={mainNavStyle} className="main-nav">
        <p>Dashboard</p>
        <p>Entity Manager</p>
        <p>Data Manager</p>
        <p>Reporting</p>
        <p>Materiality</p>
        <p>Suppliers</p>
        <p>Analytics</p>
        <p>Targets</p>
        <p>Logout</p>
      </div>
    </div>
  );
};

const MainTableSection = (props)=>{
  return (
  <div style={{background:"white", color:"#000", display:"flex", flexDirection:"column", flex:"1", alignItems:"start"}}>
    <div style={{display:"flex", flexDirection:"column", gap:"20px", padding:"24px", width:"96.8%"}}>
      <div style={{display:"flex", alignItems:"center", gap:"40px"}}>
        <div style={{alignItems:"center", display:"flex", gap:"20px"}}><img src={breathe} style={{height:"28px", padding:"7px 0"}}></img>
        <p>View Name</p></div>
        
        <p style={{border:"1px solid #C9C9C9", borderRadius:"4px", display:"flex", gap:"10px" , padding:"8px 16px"}}><HiOutlineBuildingOffice2/>North India Region <IoChevronDown/></p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{display:"flex", gap:"48px"}}>
          <p>Data Entry</p>
          <p>Tracker</p>
        </div>
        <div style={{display:"flex", gap:"16px"}}>
          <p style={{display:"flex", gap:"12px", margin:"0px", alignItems:"center"}}>For: <span style={{color:"#000", borderRadius:"4px", padding:"8px 16px", border:"1px solid #C9C9C9"}}>FY 2023-24 <IoChevronDown/></span></p>
          <button style={{background:"#2E9844", borderRadius:"4px", padding:"8px 16px", color:"white", border:"1px solid", outline:"none", fontSize:"15px",fontWeight:"700"}}>Submit For Approval</button>
        </div>
      </div>
    </div>
    <div style={{width:"100%"}}>
    <table style={{width:"100%"}}>
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
      <td>View/Edit/Delete</td>
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
      <td>View/Edit/Delete</td>
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
      <td>View/Edit/Delete</td>
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
      <td>View/Edit/Delete</td>
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
      <td>View/Edit/Delete</td>
    </tr>
  </table>

    </div>
  </div>)
}

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>WELCOME TO</h1>
      <h2>BREATHE ESG</h2>
      <p>
        We help you track your organisations metrics as per the ESG Guidelines
      </p>
      <button className="button-unstyle" onClick={() => console.log("Contact us!")}>
        Sounds Interesting? Get in touch!
      </button>
    </div>
  );
};

// SignUpSidebar component for the right part of the screen
const SignUpSidebar = (props) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [signUpMessage, setSignUpMessage] = useState(null);

  const loginHandler = ()=>{
    props.setLogin(prevState=>!prevState);
  }

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // After the user is created, get the JWT token like this:
      const token = await getIdToken(user);
  
      // Use this token as needed, e.g., storing it for session management
      localStorage.setItem('token', token);
  
      console.log('User signed up with token:', token);
      setSignUpMessage("User signed up. please Login to proceed");
    } catch (error) {
      console.error('Error signing up:', error.message);
      setSignUpMessage("Error signing up: "+error.message);
      // Handle errors appropriately
    }
  };
  return (
    <div className="signup-sidebar">
      <img className="world-image" src={world}></img>
      <div className="signup-form user-form">
        <h3>Sign Up</h3>
        <div className="row-style">
          <label>Email<span>*</span></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email ID"
            required
          />
        </div>
        <div className="row-style">
          <label>Password<span>*</span></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="row-style">
          <label>Confirm Password<span>*</span></label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>
        
        <button className="button-style" type="submit" onClick={handleSignUp}>Continue</button>
        {signUpMessage && <p>{signUpMessage}</p>}
        <p>Already have an account?<button className="login-toggle" onClick={loginHandler}>Login</button></p>    
      </div>
    </div>
  );
};

const LoginComponent = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();
  const loginHandler = ()=>{
    props.setLogin(prevState=>!prevState)
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      props.setIsloginSuccessFul(true)
      console.log('Login successful:', userCredential.user);
    } catch (error) {
      setIsLoggedIn(false);
      setLoginError(error.message);
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div>
    <img src={world}></img>
    <div className="user-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="row-style">
          <label htmlFor="email">Email<span>*</span></label>
          <input style={{width:"96%"}}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="row-style">
          <label htmlFor="password">Password<span>*</span></label>
          <input style={{width:"96%"}}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="button-style" type="submit">Log In</button>
        {loginError && <p>Error logging in: {loginError}</p>}
        <p>Don't have an account?<button className="login-toggle" onClick={loginHandler}>Sign Up</button></p>
      </form>
      {isLoggedIn && <p>Login Successful!</p>}
    </div></div>
    
  );
};