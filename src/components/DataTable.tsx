
import React, { useState, useEffect, useRef } from 'react';
import '../css/Home.css';
import Filter from '../assets/icons/Filtericon';
import { HiDotsVertical } from "react-icons/hi";
import ActivateUser from '../assets/icons/ActivateUserIcon';
import BlackList from '../assets/icons/BlackListIcon';
import Eyes from '../assets/icons/Eyesicon';
import { useNavigate } from 'react-router-dom';
import {  users } from '../hooks/DataHooks'
import ArrowDown from '../assets/icons/ArrowDownIcon'
import LeftButton from '../assets/icons/LeftButtonIcon';
import RightButton from '../assets/icons/RightButtonIcon';
import { BiCalendar } from 'react-icons/bi';




const titles = [
  { label: "ORGANIZATION" },
  { label: "USERNAME" },
  { label: "EMAIL" },
  { label: "PHONE NUMBER" },
  { label: "DATE JOINED" },
  { label: "STATUS" }
];



const DataTable: React.FC = () => {
  

  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveModalIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleModal = (index: number) => {
    setActiveModalIndex(activeModalIndex === index ? null : index);
  };

  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(null);
  const toggleDropdown = (index: number) => {
    setActiveDropdownIndex(prev => (prev === index ? null : index));
  };
  const [selectedCount, setSelectedCount] = useState<number>(10);
     const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(users.length / selectedCount);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Generate page numbers with ellipsis logic
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const navigate = useNavigate();
  return (

<>
{/* TABLE SCROLL AREA */}
<div className="table-scroll-wrapper">
  <div className="table-content">
    <div style={{ backgroundColor: "white", padding: "1rem", paddingRight: "2rem" }}>
      
      {/* TABLE HEADER */}
      <div className="table-header">
        {titles.map((item, index) => (
          <div key={index} className="table-column">
            <span className="data-title">{item.label}</span>

            <div
              style={{ cursor: index === 0 ? "pointer" : "default" }}
              onClick={index === 0 ? () => toggleDropdown(index) : undefined}
            >
              <Filter color="#545F7D" size={12} />
            </div>

            {index === activeDropdownIndex && (
              <div className="filter-dropdown">
                
                <p className='dropdown-text-head '>Organization</p>
                 <div className='dropdown-input-container drop-down-flex'>
                    <p>Status </p>
                    <div style={{marginRight:'1rem'}}><ArrowDown/></div>
                   </div>
                   <div className='filter-dropdown-space'/>
                 <p className='dropdown-text-head '>Username</p>
                  <div className='dropdown-input-container'>
                     {/* <p>User</p> */}
                                     <input
                      type="name"
                      placeholder="User"
                      className="dropdown-input"
                    />
                  </div>
                  <div className='filter-dropdown-space'/>
                  <p className='dropdown-text-head '>Email</p>
                   <div className='dropdown-input-container'>
                     {/* <p>Email</p> */}
                                     <input
                      type="email"
                      placeholder="Email"
                      className="dropdown-input"
                    />
                   </div>
                   <div className='filter-dropdown-space'/>
                  <p className='dropdown-text-head '>Date</p>
                    <div className='dropdown-input-container drop-down-flex'>
                    <p>Date</p>
                    <div style={{marginRight:'1rem'}}><BiCalendar/></div>
                   </div>
                   <div className='filter-dropdown-space'/>
                  <p className='dropdown-text-head '>Phone Number</p>
                   <div className='dropdown-input-container'>
                     {/* <p>Phone Number</p> */}
                                      <input
                      type="tel"
                      placeholder="Phone Number"
                      className="dropdown-input"
                    />
                   </div>
                   <div className='filter-dropdown-space'/>
                  <p className='dropdown-text-head '>Status</p>
                   <div className='dropdown-input-container drop-down-flex'>
                    <p>Status </p>
                    <div style={{marginRight:'1rem'}}><ArrowDown/></div>
                   </div>
                   <div className='filter-dropdown-space'/>
                  <div style={{flexDirection:"row" , display:"flex" , alignItems:"center" , gap:'1rem',margin:'2rem 0' }}>
                    <div className='dropdown-button-box' style={{backgroundColor:"tranparent" , border:'1px solid  #545F7D'}}><p style={{color:'#545F7D'}} >Reset</p></div>
                    <div className='dropdown-button-box' style={{backgroundColor:"#39CDCC"}}><p style={{color:'#FFFFFF'}}>Filter</p></div>
                  </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* TABLE ROWS */}
     {users
  .slice((currentPage - 1) * selectedCount, currentPage * selectedCount)
  .map((user, index) => {
    let statusColor = "#545F7D";
    let lightStatusColor = "#D8DDE9";

    switch (user.status) {
      case "Active":
        statusColor = "#39CD62";
        lightStatusColor = "#CFF6D6";
        break;
      case "Inactive":
        statusColor = "#545F7D";
        lightStatusColor = "#D8DDE9";
        break;
      case "Pending":
        statusColor = "#E9B200";
        lightStatusColor = "#FFF4CC";
        break;
      case "Blacklisted":
        statusColor = "#E4033B";
        lightStatusColor = "#F9C1C9";
        break;
    }

    return (
      <div className="table-row" key={user.id} style={{ position: "relative" }}>
        <p className="data-information">{user.organization}</p>
        <p className="data-information">{user.username}</p>
        <p className="data-information">{user.email}</p>
        <p className="data-information">{user.phone}</p>
        <p className="data-information">{user.date}</p>
        <div className="rounded-box" style={{ backgroundColor: lightStatusColor }}>
          <p className="status-information" style={{ color: statusColor }}>{user.status}</p>
        </div>
        <div
          className="ellipsis-container"
          onClick={() => toggleModal(index)}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <HiDotsVertical color="#213F7D" size={20} />

          {activeModalIndex === index && (
            <div
              ref={modalRef}
              className="modal-dropdown"
              style={{
                position: "absolute",
                top: "-120%",
                right: -20,
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                padding: "1rem",
                zIndex: 10,
                width: "200px",
              }}
            >
              <div
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}
                onClick={() =>
          navigate('/dashboard/user-details', {
            state: {
              user: {
                id: user.id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                status: user.status,
                accountNumber : user.accountNumber,
                sex:user.sex,
                amount:user.amount,
                name:user.name,
               IdCode: user.IdCode,
              officeEmail: user.officeEmail
              },
            },
          })
        }

              >
                <Eyes color="#545F7D" />
                <p className="modal-text">View Details</p>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}
              >
                <BlackList color="#545F7D" />
                <p className="modal-text">Blacklist User</p>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}
              >
                <ActivateUser color="#545F7D" />
                <p className="modal-text">Activate User</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  })}
    </div>
  </div>
</div>


<div className="table-footer">
  <div className="footer-left">
    <p className="filter-text">Showing</p>
    <FilterBox
      selectedValue={selectedCount}
      onChange={(value) => {
        setSelectedCount(value);
        setCurrentPage(1);
      }}
    />
    <p className="filter-text">out of {users.length}</p>
  </div>


  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
  {/* Left Button */}
  {currentPage > 1 && (
    <div style={{ cursor: 'pointer' }} onClick={handlePrev}>
      <LeftButton />
    </div>
  )}

  {/* Page Numbers */}
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.2rem' }}>
    {pageNumbers.map((num) => {
      if (
        num === 1 ||
        num === 2 ||
        num === totalPages ||
        num === totalPages - 1 ||
        Math.abs(num - currentPage) <= 1
      ) {
        return (
          <p
            key={num}
            className="filter-text-number"
            style={{
              fontWeight: num === currentPage ? 600 : 400,
              cursor: 'pointer',
            }}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </p>
        );
      }

      if (num === currentPage - 2 || num === currentPage + 2) {
        return <p key={num}>...</p>;
      }

      return null;
    })}
  </div>

  {/* Right Button */}
  {currentPage < totalPages && (
    <div style={{ cursor: 'pointer' }} onClick={handleNext}>
      <RightButton />
    </div>
  )}
</div>

</div>

</>
  );
};

interface FilterBoxProps {
  selectedValue: number;
  onChange: (value: number) => void;
}
const FilterBox: React.FC<FilterBoxProps> = ({ selectedValue, onChange }) => {
  const [open, setOpen] = useState<boolean>(false);

  const options = [10, 50, 100, 200, 500];

  return (
    <div className="filter-box" style={{ position: "relative" }}>
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
      >
        <p className="filter-intext">{selectedValue}</p>
        <ArrowDown />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="filter-dropdown"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            marginTop: "0.5rem",
            zIndex: 10,
            width: "100px",
          }}
        >
          {options.map((num) => (
            <p
              key={num}
              style={{
                margin: 0,
                padding: "0.5rem 1rem",
                cursor: "pointer",
                backgroundColor: num === selectedValue ? "#f0f0f0" : "transparent",
              }}
              onClick={() => {
                onChange(num);
                setOpen(false);
              }}
            >
              {num}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
export default DataTable;
