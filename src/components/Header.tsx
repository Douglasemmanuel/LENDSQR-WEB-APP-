import React from 'react'
import Notification from '../assets/icons/NotificationIcon'
import ThickArrowDown from '../assets/icons/ThickArrowDownIcon'
import Search from '../assets/icons/SearchIcon'
import UserImage from '../assets/images/user.png';
import LogoImage from '../assets/images/logo.png'
import '../css/Home.css';
const Header:React.FC = () => {
  return (
    <div style={{background:'#FFFFFF'}}>
      <div className='flex-container' >
       <div>
                <img src={LogoImage} alt="Logo"   className="logo-image" />
            </div>
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
            <div style={{display:'flex' , gap:'2rem' , alignItems:'center' , marginRight:'2rem'}}>
              <p className='header-text extra-class'>
                Docs
              </p>
              <Notification size={24} color='#213F7D'/>
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
                Adedeji
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