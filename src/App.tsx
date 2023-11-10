import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Dashboard children={undefined} />} />
    )
  );

  return (
    <DashboardLayout>
      <RouterProvider router={router} />
    </DashboardLayout>
  );
}

export default App;
