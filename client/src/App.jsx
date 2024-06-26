import "./App.css";
import Landing from "./Pages/Landing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import CreateHangout from "./Pages/CreateHangout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import User_Home from "./Pages/User_Home.jsx";
import HangoutSpace from "./Pages/HangoutSpace.jsx";
import JoinBubble from "./Pages/JoinBubble.jsx";
import CreateBubble from "./Pages/CreateBubble.jsx";
import Recommendations from "./Pages/Recommendations.jsx";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/bubbles/:bubbleId" element={<HangoutSpace />} />
          <Route path="/create-hangout" element={<CreateHangout />} />
          <Route path="/join-bubble" element={<JoinBubble />} />
          <Route path="/create-bubble" element={<CreateBubble />} />
          <Route path="/user-home" element={<User_Home />} />
          <Route path ="/recommendations" element ={<Recommendations/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
