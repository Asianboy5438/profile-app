import Card from './Components/Card'
import NavBar from './Components/NavBar'
import AboutMe from './Components/AboutMe'
import Wrapper from './Components/Wrapper'
import './App.css'
import Me from './assets/me.jpg'
import VG0 from './assets/VG0.jpg'
import MA0 from './assets/MA0.jpg'
import DV0 from './assets/DV0.jpg'
import { useState } from "react";
import Filters from './Components/Filters';
import AddProfileForm from './Components/AddProfileForm'
import FetchedProfiles from './Components/FetchedProfiles'

import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FetchedProfilePage from "./pages/FetchedProfilePage";
import AddProfilePage from "./pages/AddProfilePage";

function App() {

const [profiles, setProfiles] = useState([
  {id: 0, name:"Oscar", title: "UX Designer", email:"", bio:"", image: Me},
  {id: 1, name:"Van Gogh", title: "Web Designer", email:"", bio:"", image: VG0},
  {id: 2, name: "Michelangelo", title: "Software Engineer", email:"", bio:"", image: MA0},
  {id: 3, name: "Da Vinci", title: "Full Stack Developer", email:"", bio:"", image: DV0}
 ]);

const titles = [...new Set(profiles.map((profile) => profile.title))];
const [clicked,setClicked] = useState(false);
const handleClick = () => {
  setClicked((prev) => !prev);
  console.log(clicked);
}

const [title, setTitle] = useState("");
const [name, setName] = useState("");
const handleChangeTitle = (event) => {
  setTitle(event.target.value);
};

const handleSearch = (event) => {
  setName(event.target.value);
};

const handleClear = () => {
  setTitle("");
  setName("");
}
const updateProfiles = (profile) => {
  setProfiles(pre => ([...pre, profile]))
}
const filteredProfiles = profiles.filter(
  (profile) =>
    (profile.title === title || !title) &&profile.name.toLowerCase().includes(name.toLowerCase()),
);

const [mode, setMode] = useState ("light");
const toggleStyles = () => {
  setMode(mode === "light" ? "dark" : "light")
}

  return (
    <HashRouter>
      <div className={mode}>
        <NavBar />
        <Wrapper id="about">
          <button onClick={toggleStyles}>
              Switch to {mode === "light" ? "Dark" : "Light"} Mode
          </button>
          <AboutMe />
          <button onClick={handleClick}>
            {clicked ? "Clicked" : "Click me"}
          </button>
        </Wrapper>
          <Routes>
            <Route path="/" element={<HomePage profiles={profiles} handleChangeTitle={handleChangeTitle} handleSearch={handleSearch} handleClear={handleClear} title={title} name={name}/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/fetched-profiles" element={<FetchedProfilePage />} /> 
            <Route path="/add-profile" element={<AddProfilePage updateProfiles={updateProfiles}/>} />
          </Routes>
      </div>
    </HashRouter>
  )
}

export default App
