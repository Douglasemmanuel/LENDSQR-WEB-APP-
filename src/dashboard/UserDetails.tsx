import React from 'react'
import UserDetailsHead from '../components/UserDetailsHead'
import UserDetailsInformation from '../components/UserDetailsInformation'
const UserDetails: React.FC = () => {
  return (
        <div style={{backgroundColor: '#FBFBFB' , padding:'3rem'}}>
        <UserDetailsHead/>
        <div style={{marginTop:'2rem' , marginBottom:'2rem'}}></div>
        <UserDetailsInformation/>
    </div>
  )
}

export default UserDetails