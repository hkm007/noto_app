import React from "react";
import Footer from "../Footer/Footer";
import Notes from "../Notes/Notes";
import "./Dashboard.css";
import { FaSignOutAlt } from 'react-icons/fa';


function Dashboard() {

  const handleSearch = (name: string) => {
    console.log(name)
  }

  const handleLogout = () => {
    console.log('logout')
  }

  return (
    <div className="dashboard-page p-1">
      <div className="card">
        <div className="card-body">
          <div className="user-area col-lg-6 mx-auto">
            <p className="user-name">Hey! Jarvis <FaSignOutAlt className="logout" onClick={handleLogout} /></p>
            <img
              className="user-avatar"
              src={require("../../assets/avatar.png")}
              alt="avatar"
            />
          </div>
          <br />
          <div className="search-area col-lg-6 mx-auto">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search notes..."
                aria-label="Seach"
                aria-describedby="basic-addon1"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="notes-area col-lg-8 mx-auto mt-4">
        <div className="row m-1">
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
