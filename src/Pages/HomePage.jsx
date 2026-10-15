
import Footer from '../Components/Footer'
import DiverceS3 from '../Components/Home-ke-components/DiverceS3'
import Earning from '../Components/Home-ke-components/Earning'
import Hero from '../Components/Home-ke-components/Hero'
import HowToStake from '../Components/Home-ke-components/HowToStake'
import RefarEarn from '../Components/Home-ke-components/RefarEarn'
import Navbar from '../Components/Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Earning />
      <DiverceS3 />
      <HowToStake />
      <RefarEarn />
      <Footer/>
    </>
  )
}

export default HomePage