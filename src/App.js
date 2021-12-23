import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Add from "./components/Add";
import EditPost from "./components/EditPost";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <ToastContainer />
        <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
