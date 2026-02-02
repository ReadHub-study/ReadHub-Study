import { useState } from "react";
import Nav from "./Components/Nav";

import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Library from "./Pages/Library";
import Notes from "./Pages/Notes";
import Explore from "./Pages/Explore";
import Profile from "./Pages/Profile";
import TimerControler from "./Components/TimerControler";

function App() {
  return (
    <div className="font-manrope bg-background h-dvh overflow-scroll">
      <TimerControler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
