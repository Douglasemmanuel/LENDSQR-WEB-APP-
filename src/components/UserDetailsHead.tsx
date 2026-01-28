import React from 'react'
import ArrowBack from '../assets/icons/ArrowBack'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'
import Avatar from '../assets/icons/AvatarIcon'
import LikedHeart from '../assets/icons/LikedHeartIcon'
import UnLikedHeart from '../assets/icons/UnlikedHeartIcon'
import { useState } from 'react'


const userNavigationTitles = [
  { id: 1, title: "General Details" },
  { id: 2, title: "Documents" },
  { id: 3, title: "Bank Details" },
  { id: 4, title: "Loans" },
  { id: 5, title: "Savings" },
  { id: 6, title: "App and System" },
];


const UserDetailsHead: React.FC = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <div>
      <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , gap:'0.5rem' , cursor:'pointer'}} onClick={()=> navigate(-1)}>
      <ArrowBack/>
      <p className='arrow-text'>
        Back to Users
      </p>
      </div>
      <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
        <p className='main-text-head '>
          User Details
        </p>
        <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , gap:'1rem'}}>
        <div className='header-box'
         style={{
            border: "1px solid #E4033B"
          }}
        >
          <p style={{color:'#E4033B' ,textAlign:'center'}}> Blacklist User</p>
        </div>

          <div className='header-box' 
          style={{
            border: "1px solid #39CDCC",
          }}>
          <p style={{color:'#39CDCC' ,textAlign:'center'}}>Activate User</p>
        </div>
        </div>
      </div>
      <div
      style={{
        backgroundColor:' #FFFFFF',
        borderRadius:'8px',

      }}>
        <div style={{display:'flex' , flexDirection:'row'  , alignItems:'center' , gap:'1rem' , padding:'1rem'}}>
          <Avatar/>
          <div>
            <p className='name-text '>Grace Effiom</p>
            <p className='user-number'>LSQFf587g90</p>
          </div>
          <div className='vertical-divider'></div>
          <div>
            <p className='user-status'>User’s Tier</p>
           <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , gap:'0.5rem'}}>
             <LikedHeart/>
             <UnLikedHeart/>
              <UnLikedHeart/>
           </div>
          </div>
           <div className='vertical-divider'></div>
           <div>
            <p className='name-text '>₦200,000.00</p>
            <p className='account-number'>9912345678/Providus Bank</p>
          </div>
        </div>
        <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' , alignItems:'center', paddingRight:'1rem' , paddingLeft:'1rem' }}>
          {userNavigationTitles.map((item) => (
    <p
      key={item.id}
      className={`user-navigation-title ${
        activeId === item.id ? "active" : ""
      }`}
      onClick={() => setActiveId(item.id)}
    >
      {item.title}
    </p>
  ))}
           
        </div>
      </div>
    </div>
  )
}

export default UserDetailsHead