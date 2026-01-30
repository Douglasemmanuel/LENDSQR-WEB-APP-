import React from 'react'
import Notification from '../assets/icons/NotificationIcon'
import ThickArrowDown from '../assets/icons/ThickArrowDownIcon'
import Search from '../assets/icons/SearchIcon'
import UserImage from '../assets/images/user.png';
import LogoImage from '../assets/images/logo.png'
import '../css/Home.css';
import { useAuth } from '../hooks/Auth_hooks';

import { FiMenu } from 'react-icons/fi';
interface HeaderProps {
  toggleSidebar: () => void;
}
const Header:React.FC<HeaderProps> = ({toggleSidebar}) => {
  const {user} = useAuth()
  return (
    <div style={{background:'#FFFFFF'}}>
      <div className='flex-container' >
        <div style={{display:'flex' , alignItems:"center" , flexDirection:"row" , gap:'0.5rem'}}>
               <div 
                className="hamburger" 
                style={{paddingTop:'2rem'}}
                   onClick={toggleSidebar}
                   >
                <FiMenu size={24} />
              </div>
                <div>
                <img src={LogoImage} alt="Logo"   className="logo-image" />
            </div>
        </div>
              <div className='spacer' ></div>
            {/* Search bar */}

          <div
          className="search-container"
          >
            <input
            placeholder='Search for anything'
            className='search-input'
            />
            <div className="search-button">
              <Search/>
  </div>
          </div>

          
            {/* notifications */}
            <div className='header-notification-container'>
              <p className='header-text extra-class'>
                Docs
              </p>
              <div className='notification'>
                <Notification size={24} color='#213F7D'/>
              </div>
            <div style={{display:'flex' , alignItems:'center' , gap:'0.4rem'}}>
                          <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img
                src={UserImage}
                alt="User"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  
                }}
              />
            </div>

               <div style={{display:'flex' , alignItems:"center" , gap :'0.4rem' , cursor:'pointer'}}>
                <p className='header-name'>
                {user?.email.slice(0,14)}
              </p>
              <ThickArrowDown size={16} color='#213F7D'/>
               </div>
            </div>
            </div>

      </div>
    </div>
  )
}

export default Header