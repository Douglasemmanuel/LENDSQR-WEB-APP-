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

interface UserDetailsProps {
  name?: string;       
  IdCode?: string; 
  amount?: string | number;  
   accountNumber?: string | number;     
}

const UserDetailsHead: React.FC<UserDetailsProps> = ({name , IdCode , amount ,  accountNumber}) => {
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
      className="parent-card"
      style={{
        backgroundColor:' #FFFFFF',
        borderRadius:'8px',
        display: 'flex',            
    flexDirection: 'column',     
    justifyContent: 'space-between', 
     position: 'relative',   
    padding: '1rem',
      minHeight: '150px'  
      }}
      >
        {/* information1 */}
        <div style={{display:'flex' , flexDirection:'row'  , alignItems:'center' , gap:'1rem' , padding:'1rem'}}>
          <Avatar/>
          <div>
            <p className='name-text '>{name}</p>
            <p className='user-number'>{IdCode}</p>
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
            <p className='name-text '>₦{amount}</p>
            <p className='account-number'>{accountNumber} /Providus Bank</p>
          </div>
        </div>
        <div style={{margin:'1.5rem 0'}}></div>
        {/* information2 */}
        <div 
        style={{
          display:'flex' , 
          flexDirection:'row' , 
          justifyContent:'space-between' ,
          alignItems:'center', 
           padding: '0 1rem',
             position: 'absolute',
            bottom: -16,
            left: '0',
            right: '0',
           }}>
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