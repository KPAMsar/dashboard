import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/dashboard";
import React from "react";
// export const  Context = React.createContext();

const App: React.FC = () => {
  // const
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
