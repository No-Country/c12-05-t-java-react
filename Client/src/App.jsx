import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Inventory from "./pages/Inventory";
import Users from "./pages/Users";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/users" element={<Users />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;

