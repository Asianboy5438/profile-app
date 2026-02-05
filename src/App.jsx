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
    <>
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
        <Wrapper>
          <FetchedProfiles />
        </Wrapper>
        <Wrapper id="add-profile">
          <AddProfileForm onAddProfile={updateProfiles}/>
        </Wrapper>
        <Wrapper id="profile">
          <Filters
            titles={titles}
            title={title}
            name={name}
            handleChange={handleChangeTitle}
            handleSearch={handleSearch}
            handleClick={handleClear}
          />
            <div className="grid">
              {filteredProfiles.length > 0 ? (
                filteredProfiles.map((profile) => (
                  <Card
                    key={profile.id}
                    name={profile.name}
                    title={profile.title}
                    image={profile.image}
                    mode = {mode}
                  />
                ))
              ) : (
                <p>No profiles selected.</p>
              )}
            </div>
        </Wrapper>
      </div>
    </>
  )
}

export default App
