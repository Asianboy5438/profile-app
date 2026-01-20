import Card1 from './Components/Card1'
import Card2 from './Components/Card2'
import NavBar from './Components/NavBar'
import AboutMe from './Components/AboutMe'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <AboutMe />
      <div className="Profile-card-container">
        <Card1 />
        <Card2 />
      </div>
    </>
  )
}

export default App
