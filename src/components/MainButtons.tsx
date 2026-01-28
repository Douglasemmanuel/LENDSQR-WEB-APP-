import React from 'react'
import '../css/Home.css'
import ActiveUsers from '../assets/icons/Header/ActiveUserIcon'
import Users from '../assets/icons/Header/usersIcon'
import UserWithLoan from '../assets/icons/Header/UserWithLoanIcon'
import UserWithSavings from '../assets/icons/Header/UserWithSavings'


const statsData = [
  {
    icon: Users,
    label: 'Users',
    value: '2,453',
  },
  {
    icon: ActiveUsers,
    label: 'Active Users',
    value: '2,453',
  },
  {
    icon: UserWithLoan,
    label: 'Users with Loans',
    value: '12,453',
  },
  {
    icon: UserWithSavings,
    label: 'Users with Savings',
    value: '102,453',
  },
];
const MainButtons:React.FC = () => {
  return (
    <div>
      <p className='main-text-head'>
        USERS
      </p>
      <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',     
    flexWrap: 'wrap', 
  }}
>
 

     {statsData.map((item, index) => {
    const Icon = item.icon;

    return (
      <div className="custom-div" key={index}>
        <div>
          <Icon />
        </div>

        <p className="custom-text">{item.label}</p>

        <h3 className="custom-text-large">{item.value}</h3>
      </div>
    );
  })}
   </div>
    </div>
  )
}

export default MainButtons