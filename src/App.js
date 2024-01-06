import "./App.css";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, getIdToken, signInWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import world from "./world.png"
import SideNav from "./components/Sidenav";
import MainTableSection from "./components/MainTableSection";



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

      {isLogInSuccessFul ? <><SideNav setIsloginSuccessFul={setIsloginSuccessFul} auth={auth}></SideNav>
      <MainTableSection></MainTableSection></>
      : <div className="login-section">
            <MainContent />
      {!login?
      <SignUpSidebar login={login} setLogin={setLogin} setIsloginSuccessFul={setIsloginSuccessFul}/>:
      <LoginComponent login={login} setLogin={setLogin} setIsloginSuccessFul={setIsloginSuccessFul}/>
      }
      </div>  
    }
    </div>
  );
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
  
      // After the user is created, we get the JWT token like this:
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
      <form className="signup-form user-form">
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
      </form>
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
            placeholder="Your Email Id"
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
            placeholder="Your Password"
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