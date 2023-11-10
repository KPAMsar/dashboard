import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard children={undefined} />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
