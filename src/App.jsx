import Card1 from './Components/Card1'
import Card2 from './Components/Card2'
import NavBar from './Components/NavBar'
import AboutMe from './Components/AboutMe'
import Wrapper from './Components/Wrapper'
import './App.css'
//import Me from './assets/me.jpg'

function App() {

//const profiles= [
//  {id: 0, name:"Oscar", title: "UX Designer", image:me}
//  {id: 1, name:"Van Gogh", title: "Painter", image:VG0}
// ]

  return (
    <>
      <NavBar />
      <Wrapper id="about">
        <AboutMe />
      </Wrapper>
      <Wrapper id="profile">
          <div className="grid">
            <Card1 />
            <Card2 />
          </div>
      </Wrapper>
    </>
  )
}

//{profiles.map(profile => (
//  <Card key={profile.id} name={profile.name} title={profile.title} image={profile.image} />
//))}

export default App
