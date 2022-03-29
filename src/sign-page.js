 import './App.css';
 import { Outlet, useNavigate } from "react-router-dom";
 import { useRef, useState } from "react";
import { signup, login, useAuth } from "./firebase";


 function Form()  {
   const navigate = useNavigate();

   const [ loading, setLoading ] = useState(false);
   const currentUser = useAuth();
 
   const emailRef = useRef();
   const passwordRef = useRef();
 
   async function handleSignup() {
     setLoading(true);
     // try {
       await signup(emailRef.current.value, passwordRef.current.value);
     // } catch {
       // alert("Error!");
     // }
     setLoading(false);
   }
 
   async function handleLogin() {
     setLoading(true);
     try {
       await login(emailRef.current.value, passwordRef.current.value);
     } catch {
       alert("Error!");
     }
     setLoading(false);
   }
 

 return(
    <div>
       <div className='title'>
          <h2>tunde's coding commity</h2>
          <h2>Staff/ status</h2>
          <div className='underline'></div>
        </div>
        
  <form className="form">
  
    <div id="main">
      
      <div>Currently logged in as: { currentUser?.email } </div>

      <div id="fields">
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>

      <button className='glow-on-hover'  onClick={handleSignup}>Sign Up</button>
      <button className='glow-on-hover'  onClick={handleLogin} >Log In</button>
      <button className='glow-on-hover'  onClick= {() => {navigate('/App');}}>move to main page</button>

    </div>
    </form>
    <Outlet />
    </div>
 );
}

export default Form;
