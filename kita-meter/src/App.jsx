import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Placeholder from "./pages/Placeholder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/driver/login"
          element={<Placeholder title="Driver Login" />}
        />

        <Route
          path="/driver/register"
          element={<Placeholder title="Driver Register" />}
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