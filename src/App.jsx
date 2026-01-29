import Card from './Components/Card'
import NavBar from './Components/NavBar'
import AboutMe from './Components/AboutMe'
import Wrapper from './Components/Wrapper'
import './App.css'
import Me from './assets/me.jpg'
import VG0 from './assets/VG0.jpg'
import MA0 from './assets/MA0.jpg'
import DV0 from './assets/DV0.jpg'
import { use, useState } from "react";
import Filters from './Components/Filters';

function App() {

const profiles= [
  {id: 0, name:"Oscar", title: "UX Designer", image: Me},
  {id: 1, name:"Van Gogh", title: "Web Designer", image: VG0},
  {id: 2, name: "Michelangelo", title: "Software Engineer", image: MA0},
  {id: 3, name: "Da Vinci", title: "Full Stack Developer", image: DV0}
 ];
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

const filteredProfiles = profiles.filter(
  (profile) =>
    (profile.title === title || !title) &&profile.name.toLowerCase().includes(name.toLowerCase()),
);

const [styles, setStyles] = useState ("light-mode");
const toggleStyles = () => {
  setStyles(styles === "light-mode" ? "dark-mode" : "light-mode")
}


  return (
    <>
      <NavBar />
      <Wrapper id="about">
        <AboutMe />
        <button onClick={handleClick}>
          {clicked ? "Clicked" : "Click me"}
        </button>
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
                />
              ))
            ) : (
              <p>No profiles selected.</p>
            )}
          </div>
      </Wrapper>
    </>
  )
}

export default App
