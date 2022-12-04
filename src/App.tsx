import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import JobDetails from "./modules/job-details";
import JobsList from "./modules/jobs-list";
import NoResults from "./modules/no-results";
import "./App.scss";
import "./assets/scss/main.scss";
function Layout() {
    return (
        <div className="layout">
            <p style={{ fontSize: 24 }}>
                <b>Github</b> Jobs
            </p>
            <Outlet />
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<JobsList />} />
                <Route path="job/:id" element={<JobDetails />} />
                <Route path="*" element={<NoResults />} />
            </Route>
        </Routes>
    );
}
