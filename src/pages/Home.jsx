import BenefitsSection from "../components/Home/BenefitsSection"
import Carousel from "../components/Home/Carousel"
import FollowSocial from "../components/Home/FollowSocial"
import GetInTouch from "../components/Home/GetInTouch"
import TopRated from "../components/Home/TopRated"

function Home() {
  return (
    <div>
     <Carousel/>
   <div className="container mx-auto">
      <TopRated/>
     <BenefitsSection/>
     <FollowSocial/>
     <GetInTouch/>
   </div>
    </div>
  )
}

export default Home