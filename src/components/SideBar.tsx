import React from 'react'
import Organization from '../assets/icons/OrganizationIcon'
import ArrowDown from '../assets/icons/ArrowDownIcon'
import '../css/Sidebar.css'
import Home from '../assets/icons/HomeIcon'
import Users from '../assets/icons/UsersIcon'
import Guarantors from '../assets/icons/GuarantorsIcon'
import Loan from '../assets/icons/LoanIcon'
import LoanRequest from '../assets/icons/LoanRequestIcon'
import Savings from '../assets/icons/SavingsIcon'
import Karma from '../assets/icons/KarmaIcon'
import DecisionIcon from '../assets/icons/DecisionIcon'
import WhiteList from '../assets/icons/WhitelistIcon'
import FessandCharges from '../assets/icons/FeesandChargesIcon'
import Transactions from '../assets/icons/TransactionIcon'
import ServiceAccount from '../assets/icons/ServiceAccountIcon'
import Services from '../assets/icons/ServicesIcon'
import SavingsProduct from '../assets/icons/SavingsProductIcon'
import ReportList from '../assets/icons/ReportsIcon'
import Settlements from '../assets/icons/SettlementsIcon'
import Preferences from '../assets/icons/PreferencesIcon'
import FeesandPricing from '../assets/icons/FeesandPricingIcon'
import Audit from '../assets/icons/AuditIcon'
import Logout from '../assets/icons/LogoutIcon'
import SystemMessages from '../assets/icons/SystemMessagesIcon'
import { useEffect , useState } from 'react'
import { FiMenu } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
const SideBar:React.FC<SidebarProps> = ({isOpen , toggleSidebar}) => {
      const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
      useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // on load

  return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
    <div className='sidebar'>
     <div 
     className={`sidebar ${isOpen ? 'open' : 'closed'}`}
     style={{padding:'10px 15px'}}>
      {/* <div 
        className="hamburger-right" 
        //  className={`hamburger ${isOpen ? 'hamburger-right' : ''}`}
           onClick={toggleSidebar}>
        <FiMenu size={24} />
      </div> */}
      {/* {isDesktop || isOpen &&(
         <div style={{display:'flex ' , flexDirection:'row' , gap:'1rem', alignItems:'center'}}>
        <Organization color=' #213F7D'/>
        <p className='text-body'>
          Switch Organization
        </p>
        <ArrowDown color=' #213F7D' />
      </div>
      )} */}
        <div style={{display:'flex ' , flexDirection:'row' , gap:'1rem', alignItems:'center'}}>
        <Organization color=' #213F7D'/>
        <p className='text-body'>
          Switch Organization
        </p>
        <ArrowDown color=' #213F7D' />
      </div>
          <div style={{display:'flex ' , flexDirection:'row' , gap:'1rem', alignItems:'center'}}>
      <Home color=' #213F7D'/>
      <p className='text-body'>
          Dashboard
        </p>
      </div>
       {/* {isDesktop || isOpen &&(
         <div style={{display:'flex ' , flexDirection:'row' , gap:'1rem', alignItems:'center'}}>
      <Home color=' #213F7D'/>
      <p className='text-body'>
          Dashboard
        </p>
      </div>
      )} */}
     
   <SideInformation data={customersUsers} isDesktop={isDesktop} isOpen={isOpen}/>
     <SideInformation data={customersBusiness} isDesktop={isDesktop} isOpen={isOpen}/>
       <SideInformation data={customersSetting} isDesktop={isDesktop} isOpen={isOpen}/>
     </div>
        <>
        <div className="divider"></div>

        <div style={{padding:'10px 15px'}}>
      <div style={{display:'flex ' , flexDirection:'row' , gap:'1rem', alignItems:'center'}}> 
        <Logout color=' #213F7D'/> 
        <p className='text-body'> Logout </p> 
        </div>
        <div>
          <p className='text-body'> v1.2.0 </p> 
        </div>
     </div>
     </>
     {/* {!isDesktop || !isOpen &&(
      <>
        <div className="divider"></div>

        <div style={{padding:'10px 15px'}}>
      <div style={{display:'flex ' , flexDirection:'row' , gap:'1rem', alignItems:'center'}}> 
        <Logout color=' #213F7D'/> 
        <p className='text-body'> Logout </p> 
        </div>
        <div>
          <p className='text-body'> v1.2.0 </p> 
        </div>
     </div>
     </>
     )} */}
    
   
    </div>
  )
}
export const customersUsers = {
  head: 'CUSTOMERS',
  items: [
    { icon: Users, label: 'Users' },
    { icon: Guarantors, label: 'Guarantors' },
    { icon: Loan, label: 'Loans' },
    { icon: DecisionIcon, label: 'Decision Models' },
    { icon: Savings, label: 'Savings ' },
    { icon: LoanRequest, label: 'Loan Requests' },
    { icon: WhiteList, label: 'Whitelist' },
    { icon: Karma, label: 'Karma' },
  ],
};
export const customersBusiness = {
  head: 'BUSINESS',
  items: [
    { icon: Organization, label: 'Organization' },
    { icon: LoanRequest, label: 'Loan Product' },
    { icon: SavingsProduct, label: 'Savings Products' },
    { icon: FessandCharges, label: 'Fees and Charges ' },
    { icon: Transactions, label: 'Transactions' },
    { icon: Services, label: 'Services' },
    { icon: ServiceAccount, label: 'Service Account' },
    { icon: Settlements, label: 'Settlements' },
    { icon: ReportList, label: 'Reports' },
  ],
};
export const customersSetting = {
  head: 'SETTINGS',
  items: [
    { icon: Preferences, label: 'Preferences' },
    { icon: FeesandPricing, label: 'Fees and Pricicng' },
    { icon: Audit, label: 'Audit Logs' },
    { icon: SystemMessages, label: 'SystemMessages' },
  ],
};

type SideInformationProps = {
  data: {
    head: string;
    items: {
      icon: React.ElementType;
      label: string;
    }[];
  };
  isOpen: boolean;
  isDesktop: boolean;
};

const SideInformation: React.FC<SideInformationProps> =({data , isOpen , isDesktop})=>{
  return (
      <div>
         {(isDesktop || isOpen) && (
              <p className='text-head'>
         {data.head}
        </p>
            )}
       
      {data.items.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              alignItems: 'center',
              cursor:'pointer',
            }}
          >
             {(isDesktop || isOpen) && (
                <Icon color="#213F7D"   />
            )}
          
            {(isDesktop || isOpen) && (
              <p className="text-body">{item.label}</p>
            )}
            {/* <p className="text-body">{item.label}</p> */}
          </div>
        );
      })}
     </div>
  )
}

export default SideBar