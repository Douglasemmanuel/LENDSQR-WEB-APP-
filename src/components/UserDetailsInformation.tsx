import React from 'react'
import '../css/Home.css'

interface UserInfoProps {
  name?: string;
  email?: string;
  sex?: string;
  phone?: string;
  amount?:string;
  officeEmail?: string;
}





const UserDetailsInformation: React.FC<UserInfoProps> = ({ name, email, sex, phone , amount ,officeEmail  }) => {
  const userInfo1 = [
{ title: "Full Name", value: name },
 { title: "Marital status", value: "Single" },
];
const userInfo2 = [
  { title: "Phone Number", value: phone },
  { title: "Children", value: "None" },
];
const userInfo3 = [
  { title: "Email Address", value: email },
   { title: "Type of Residence", value: "Parent’s Apartment" },
];
const userInfo4 = [
  { title: "BVN", value: phone },
];
const userInfo5 = [
  { title: "Gender", value: sex},
];
const userE1 = [
  { title: "level of education", value: "B.sc" },
   { title: "office email", value: officeEmail },
];
const userE2 = [

  { title: "employment status", value: "Employed" },
   { title: "Monthly income", 
    value:  amount
      ? `₦${Number(amount)} - ₦${Number(amount) * 2}`
      : "N/A",
  },
];
const userE3 = [
  { title: "sector of employment", value: "Fintech" },
    { title: "loan repayment", value: "40,000" },
];
const userE4 = [
 
  { title: "Duration of employment", value: "2 years" },
];

const UserSocial1 = [
  { title: "Twitter", value: "@grace_effiom" },
];
const UserSocial2 = [
  { title: "Facebook", value: "Grace Effiom" },
];
const UserSocial3 = [
  { title: "TInstagram", value: "@grace_effiom" },
];
const UserGuarantor1 = [
  { title: "full Name", value: "Debby Ogana" },
];
const UserGuarantor2 = [
  { title: "Phone Number", value: "07060780922" },
];
const UserGuarantor3 = [
  { title: "Email Address", value: "debby@gmail.com" },
];
const UserGuarantor4 = [
  { title: "Relationship", value: "Sister" },
];
  return (
    <div  style={{ width: '100%' , overflowX:'auto'}}>
      <div
      className='data-table'
      
      >
        <div style={{padding:"1rem"   }}>
          <div className='table-divider'>
          <p className='information-head'>Personal Information</p>
          <div className='user-information-container-row'>
           <InfoList data={userInfo1} />
           <InfoList data={userInfo2} />
            <InfoList data={userInfo3} />
           <InfoList data={userInfo4} />
           <InfoList data={userInfo5} />
            <div style={{margin:'0 1rem'}}></div>
          </div>
          </div>
            <div className='table-divider'>
          <p className='information-head'>Education and Employment</p>
          <div className='user-information-container-row'>
           <InfoList data={userE1} />
            <InfoList data={userE2} />
             <InfoList data={userE3} />
              <InfoList data={userE4} />
               <div style={{margin:'0 1rem'}}></div>
          </div>
           
          </div>
          <div className='table-divider'>
          <p className='information-head'>Socials</p>
          <div className='flex-row-between'>
           <InfoList data={UserSocial1} />
            <InfoList data={UserSocial2} />
             <InfoList data={UserSocial3} />
              <div style={{margin:'0 1rem'}}></div>
          </div>
          </div>
            <div className='table-divider'>
          <p className='information-head'>Guarantor</p>
          <div className='flex-row-between'>
           <InfoList data={UserGuarantor1} />
            <InfoList data={UserGuarantor2} />
             <InfoList data={UserGuarantor3} />
              <InfoList data={UserGuarantor4} />
               <div style={{margin:'0 1rem'}}></div>
          </div>
          </div>
            <div style={{  paddingTop:'1rem' , paddingBottom:'1rem' }}>
         <div className='flex-row-between'>
           <InfoList data={UserGuarantor1} />
            <InfoList data={UserGuarantor2} />
             <InfoList data={UserGuarantor3} />
              <InfoList data={UserGuarantor4} />
              <div style={{margin:'0 1rem'}}></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
type InfoItem = {
  title: string;
  value: string | undefined;
};

interface InfoListProps {
  data: InfoItem[];
}

const InfoList: React.FC<InfoListProps> = ({ data }) => {
  return (
    <div

>
      {data.map((item, index) => (
        <div 
        key={index}
         style={{
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'flex-start',
          gap: '0.25rem'           
        }}
        >
          <p className="information-title">{item.title}</p>
          <p className="information-details">{item.value}</p>
        </div>
      ))}
    </div>
  );
};



export default UserDetailsInformation