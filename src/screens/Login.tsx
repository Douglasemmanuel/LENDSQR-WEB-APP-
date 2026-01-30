import React from 'react'
import LogoImage from '../assets/images/logo.png'
import LoginImage from '../assets/images/loginimage.png' 
import '../css/login.css'
import { useState } from 'react'
import { useAuth } from '../hooks/Auth_hooks'
import { useNavigate } from 'react-router-dom'
const LoginScreen: React.FC = () => {
  return (

<div className="split-screen">
  <div className="left-side">
    <div >
      <img src={LogoImage} alt="Logo" className='logo-container' />
    </div>

   <div>
     <img
      src={LoginImage}
      alt="Login"
      className="login-image"
    />
   </div>
  </div>

  <div className="right-side">
    <LoginForm />
  </div>
</div>

  )
}
const LoginForm:React.FC =()=>{
 

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const { login} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email");
      return;
    }

    login(email); 
      navigate("/dashboard", { replace: true });
  
  };
return(
    <div style={{display:'flex' , flexDirection:"column" , alignItems:'flex-start' , justifyContent:'center' , backgroundColor:'white'}}>
        <p className="heading-text" style={{ margin: 0 }}>Welcome!</p>
      <p className='body-text' style={{ margin: 0 }}>Enter details to login.</p>
      
      <div >
        <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
  <input 
  type="text" 
  placeholder="Email" 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  />
</div>
<div style={{margin:"1rem 0"}}/>
 <div className="password-container">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span
        className="forget-show-text"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      </span>
    </div>
  <p className='forget-password-text'>Forgot PASSWORD?</p>
  <div style={{margin:"1rem 0"}}/>
<button type="submit" className="input-button">
  <p>LOG IN</p>
</button>
</form>



      </div>
    
    </div>
)
}
export default LoginScreen