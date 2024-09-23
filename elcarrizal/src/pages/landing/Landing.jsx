import Navigation from "../../components/navBar/NavBar"
import AppCarousel from "../../components/carousel/Carousel"
import OurStory from "../../components/ourStory/OurStory"
import Footer from "../../components/footer/Footer"

const Landing = () => {
  return (
    <div>
      <Navigation/>
      <AppCarousel/>
      <OurStory/>
      <Footer/>
    </div>
  )
}

export default Landing
