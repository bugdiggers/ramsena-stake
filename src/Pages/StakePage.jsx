import Navbar from "../Components/Navbar"
import Refral from "../Components/StakePage-ke-sections/Refral"
import StakeHero from "../Components/StakePage-ke-sections/StakeHero"
import StakingList from "../Components/StakePage-ke-sections/StakingList"

 

const StakePage = () => {
  return (
    <>
      <Navbar/>
      <StakeHero />
      {/* <Refral /> */}
       <StakingList/>
      </>
  )
}

export default StakePage