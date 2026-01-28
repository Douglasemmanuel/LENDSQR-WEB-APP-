
import React, { useState, useEffect, useRef } from 'react';
import '../css/Home.css';
import Filter from '../assets/icons/Filtericon';
import { HiDotsVertical } from "react-icons/hi";
import ActivateUser from '../assets/icons/ActivateUserIcon';
import BlackList from '../assets/icons/BlackListIcon';
import Eyes from '../assets/icons/Eyesicon';
import { useNavigate } from 'react-router-dom';

const titles = [
  { label: "ORGANIZATION" },
  { label: "USERNAME" },
  { label: "EMAIL" },
  { label: "PHONE NUMBER" },
  { label: "DATE JOINED" },
  { label: "STATUS" }
];

const users = [
  { id:1, organization: "Acme Corp", username: "douglas_em", email: "emmanueldouglas2121@gmail.com", phone: "09021003802", date: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:2, organization: "Tech Solutions", username: "jane_doe", email: "jane.doe@example.com", phone: "08012345678", date: "Jan 20, 2021 09:30 AM", status: "Active" },
  { id:3, organization: "Lendsqr", username: "john_smith", email: "john.smith@example.com", phone: "08123456789", date: "Feb 12, 2021 02:15 PM", status: "Pending" },
  { id:4, organization: "Lendsqr", username: "alice_j", email: "alice.johnson@example.com", phone: "07012345678", date: "Mar 10, 2021 11:45 AM", status: "Active" },
  { id:5, organization: "Lendsqr", username: "bob_brown", email: "bob.brown@example.com", phone: "09087654321", date: "Apr 05, 2021 01:00 PM", status: "Blacklisted" },
  { id:6, organization: "Lendsqr", username: "cathy_w", email: "cathy.williams@example.com", phone: "08098765432", date: "May 22, 2021 03:20 PM", status: "Pending" },
  { id:7, organization: "Lendsqr", username: "david_t", email: "david.taylor@example.com", phone: "07098765432", date: "Jun 18, 2021 10:10 AM", status: "Inactive" },
  { id:8, organization: "Lendsqr", username: "ella_davis", email: "ella.davis@example.com", phone: "08109876543", date: "Jul 12, 2021 09:50 AM", status: "Active" },
  { id:9, organization: "Lendsqr", username: "frank_m", email: "frank.miller@example.com", phone: "09011223344", date: "Aug 07, 2021 04:30 PM", status: "Blacklisted" },
  { id:10, organization: "Lendsqr", username: "grace_w", email: "grace.wilson@example.com", phone: "08022334455", date: "Sep 15, 2021 12:15 PM", status: "Pending" }
];

type UserType = typeof users[0];

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
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "white", padding: '1rem', paddingRight: '2rem' }}>
      <div className="table-header">
        {titles.map((item, index) => (
          <div key={index} className="table-column">
            <span className="data-title">{item.label}</span>
            <Filter color="#545F7D" size={12} />
          </div>
        ))}
      </div>
      {users.map((user, index) => {
        let statusColor = "#545F7D";
        let lightStatusColor = "#D8DDE9";

        switch(user.status) {
          case "Active": statusColor = "#39CD62"; lightStatusColor = "#CFF6D6"; break;
          case "Inactive": statusColor = "#545F7D"; lightStatusColor = "#D8DDE9"; break;
          case "Pending": statusColor = "#E9B200"; lightStatusColor = "#FFF4CC"; break;
          case "Blacklisted": statusColor = "#E4033B"; lightStatusColor = "#F9C1C9"; break;
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
                style={{display:'flex' , flexDirection:'row' , alignItems:'center' , gap:'1rem'}}
                  onClick={() => navigate("/dashboard/user-details")}
                >
                    <Eyes color=' #545F7D'/>
                    <p className='modal-text'>View Details</p>
                </div>
                  <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , gap:'1rem', marginTop:'1rem'}}>
                    <BlackList color=' #545F7D'/>
                    <p className='modal-text'>Blacklist User</p>
                </div>
                  <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , gap:'1rem' , marginTop:'1rem' }}>
                    <ActivateUser color=' #545F7D'/>
                    <p className='modal-text'>Activate User</p>
                </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataTable;
