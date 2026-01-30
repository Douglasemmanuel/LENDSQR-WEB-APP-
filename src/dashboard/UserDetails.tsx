import React from 'react'
import UserDetailsHead from '../components/UserDetailsHead'
import UserDetailsInformation from '../components/UserDetailsInformation'
import { useLocation } from 'react-router-dom';
import '../css/Home.css';
const UserDetails: React.FC = () => {
     const { state } = useLocation();
    const user = state?.user
    ? {
        id: state.user.id,
        username: state.user.username,
        email: state.user.email,
        phone: state.user.phone,
        status: state.user.status,
         accountNumber: state.user.accountNumber,
        sex: state.user.sex,
        amount: state.user.amount,
        name: state.user.name,
        IdCode: state.user.IdCode,
       officeEmail:state.user.officeEmail
      }
    : null;
  return (
        <div 
        className='home-container '
        style={{
        maxHeight: '100vh',
        scrollBehavior: 'smooth',
        }}
        >
          <div  style={{ overflowX: 'auto' }}>
        <UserDetailsHead name={user?.name}  IdCode={user?.IdCode} amount={user?.amount}   accountNumber={user?. accountNumber}/>
        <div style={{marginTop:'2rem' , marginBottom:'2rem'}}></div>
        <UserDetailsInformation 
        name={user?.name} 
        email={user?.email} 
        sex={user?.sex}  
        phone={user?.phone}  
        amount={user?.amount} 
        officeEmail={user?.officeEmail}
        />
        </div>
    </div>
  )
}

export default UserDetails