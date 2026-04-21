import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import DriverLogin from "./pages/DriverLogin";
import DriverRegister from "./pages/DriverRegister";
import Placeholder from "./pages/Placeholder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/driver/login" element={<DriverLogin />} />
        <Route path="/driver/register" element={<DriverRegister />} />

        <Route
          path="/driver/dashboard"
          element={<Placeholder title="Driver Dashboard" />}
        />


        <Route
          path="/admin/login"
          element={<Placeholder title="Admin Login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;