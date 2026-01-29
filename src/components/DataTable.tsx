
import React, { useState, useEffect, useRef } from 'react';
import '../css/Home.css';
import Filter from '../assets/icons/Filtericon';
import { HiDotsVertical } from "react-icons/hi";
import ActivateUser from '../assets/icons/ActivateUserIcon';
import BlackList from '../assets/icons/BlackListIcon';
import Eyes from '../assets/icons/Eyesicon';
import { useNavigate } from 'react-router-dom';
import { getRandomDate, users } from '../hooks/DataHooks'
import ArrowDown from '../assets/icons/ArrowDownIcon'
import LeftButton from '../assets/icons/LeftButtonIcon';
import RightButton from '../assets/icons/RightButtonIcon';

import type { User } from '../hooks/DataHooks'


const titles = [
  { label: "ORGANIZATION" },
  { label: "USERNAME" },
  { label: "EMAIL" },
  { label: "PHONE NUMBER" },
  { label: "DATE JOINED" },
  { label: "STATUS" }
];

// const users = [
//   { id:1, organization: "Acme Corp", username: "douglas_em", email: "emmanueldouglas2121@gmail.com", phone: "09021003802", date: "May 15, 2020 10:00 AM", status: "Inactive" },
//   { id:2, organization: "Tech Solutions", username: "jane_doe", email: "jane.doe@example.com", phone: "08012345678", date: "Jan 20, 2021 09:30 AM", status: "Active" },
//   { id:3, organization: "Lendsqr", username: "john_smith", email: "john.smith@example.com", phone: "08123456789", date: "Feb 12, 2021 02:15 PM", status: "Pending" },
//   { id:4, organization: "Lendsqr", username: "alice_j", email: "alice.johnson@example.com", phone: "07012345678", date: "Mar 10, 2021 11:45 AM", status: "Active" },
//   { id:5, organization: "Lendsqr", username: "bob_brown", email: "bob.brown@example.com", phone: "09087654321", date: "Apr 05, 2021 01:00 PM", status: "Blacklisted" },
//   { id:6, organization: "Lendsqr", username: "cathy_w", email: "cathy.williams@example.com", phone: "08098765432", date: "May 22, 2021 03:20 PM", status: "Pending" },
//   { id:7, organization: "Lendsqr", username: "david_t", email: "david.taylor@example.com", phone: "07098765432", date: "Jun 18, 2021 10:10 AM", status: "Inactive" },
//   { id:8, organization: "Lendsqr", username: "ella_davis", email: "ella.davis@example.com", phone: "08109876543", date: "Jul 12, 2021 09:50 AM", status: "Active" },
//   { id:9, organization: "Lendsqr", username: "frank_m", email: "frank.miller@example.com", phone: "09011223344", date: "Aug 07, 2021 04:30 PM", status: "Blacklisted" },
//   { id:10, organization: "Lendsqr", username: "grace_w", email: "grace.wilson@example.com", phone: "08022334455", date: "Sep 15, 2021 12:15 PM", status: "Pending" }
// ];

type UserType = typeof users[0];

const DataTable: React.FC = () => {
  
  // getRandomDate

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
    <div style={{ backgroundColor: "white", padding: '1rem', paddingRight: '2rem' }}>
      <div className="table-header">
        {/* {titles.map((item, index) => (
          <div key={index} className="table-column">
            <span className="data-title">{item.label}</span>
           <div style={{cursor:'pointer'}}>
             <Filter color="#545F7D" size={12}  />
           </div>
          </div>
        ))} */}
        {titles.map((item, index) => (
  <div key={index} className="table-column">
    <span className="data-title">{item.label}</span>
    
    <div
      style={{ cursor: index === 0 ? 'pointer' : 'default' }}
      // onClick={index === 0 ? () => toggleDropdown(index): undefined} 
      onClick={index === 0 ? () => { alert("Clicked!"); toggleDropdown(index); } : undefined}

    >
      <Filter color="#545F7D" size={12} />
    </div>
     { index === activeDropdownIndex && (
        <div
          style={{
            position: "absolute",
            bottom: "100%", // dropdown appears above the column
            left: 0,
            marginBottom: "4px", // small gap
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "0.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            zIndex: 1000,
            minWidth: "120px"
          }}
        >
          <p style={{ margin: 0, padding: "0.25rem 0" }}>Option 1</p>
          <p style={{ margin: 0, padding: "0.25rem 0" }}>Option 2</p>
          <p style={{ margin: 0, padding: "0.25rem 0" }}>Option 3</p>
        </div>
      )}
  </div>
))}

      </div>

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
 
     <div>
      {/* Filter Box and Showing count */}
      <div style={{ display: 'flex', justifyContent: "space-between", alignItems:'center', marginTop: 4 }}>
        <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
          <p className='filter-text'>Showing</p>
          <FilterBox 
            selectedValue={selectedCount} 
            onChange={(value) => {
              setSelectedCount(value);
              setCurrentPage(1); 
            }} 
          />
          <p className='filter-text'> out of {users.length}</p>
        </div>

        {/* Pagination Buttons */}
        <div style={{ display:'flex', alignItems:'center', gap:'1.2rem' }}>
          {/* Left Button */}
          {currentPage > 1 && (
            <div style={{ cursor:'pointer' }} onClick={handlePrev}>
              <LeftButton />
            </div>
          )}

          {/* Page Numbers */}
          <div style={{ display:"flex", flexDirection:'row', gap:'1.2rem' }}>
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
                    className='filter-text-number' 
                    style={{ fontWeight: num === currentPage ? 600 : 400, cursor: 'pointer' }}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </p>
                );
              }

              // Ellipsis for skipped numbers
              if (num === currentPage - 2 || num === currentPage + 2) {
                return <p key={num}>...</p>;
              }

              return null; 
            })}
          </div>

        
          {currentPage < totalPages && (
            <div style={{ cursor:'pointer' }} onClick={handleNext}>
              <RightButton />
            </div>
          )}
        </div>
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
