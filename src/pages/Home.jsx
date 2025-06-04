import BenefitsSection from "../components/Home/BenefitsSection"
import Carousel from "../components/Home/Carousel"
import FollowSocial from "../components/Home/FollowSocial"
import GetInTouch from "../components/Home/GetInTouch"
import TopRated from "../components/Home/TopRated"

function Home() {
  return (
    <div>
     <Carousel/>
     <TopRated/>
     <BenefitsSection/>
     <FollowSocial/>
     <GetInTouch/>
    </div>
  )
}

export default Home