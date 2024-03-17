import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { jobData } from "../../Constants";
import JobCard from "./JobCard/JobCard";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewJobs from "./Viewjobs/ViewJobs";

const CompanySide = () => {
  return (
    <div className="flex h-screen overflow-hidden"> {/* Applied overflow-hidden to hide the scrollbar */}
      <Sidebar />
      <Routes>
        <Route path="/explore" element={<ViewJobs />} />
        <Route path="/viewjobs" element={<JobCard/>} />
        <Route path="/addjobs" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default CompanySide;
