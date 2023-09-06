import "./Home.css"
import SearchBar from '../Components/Header/SearchBar'
import AOS from 'aos'
import "aos/dist/aos.css"
AOS.init()

function Home() {
  return (
    <div className="main-container">
      <SearchBar></SearchBar>
 
    </div>
  )
}

export default Home