import React from 'react'
import LogoImage from '../assets/images/logo.png'
import LoginImage from '../assets/images/loginimage.png' 

const LoginScreen: React.FC = () => {
  return (
    <div>
        <div style={{display:"flex" , flexWrap:'wrap'}}>
            <LoginForm/>
           <div>
             <div>
                <img src={LogoImage} alt="Logo"  />
            </div>
          <div  style={{ width: "100%", height: "100%" }}>
  <img
    src={LoginImage}
    alt="Login"
    style={{
      width: '50rem',
      height: '20rem',
    }}
  />
</div>

           </div>

        </div>
    </div>
  )
}
const LoginForm:React.FC =()=>{
return(
    <div>

    </div>
)
}
export default LoginScreen