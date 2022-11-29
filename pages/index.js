import Layout from '../components/layout';
import Avatar from '../components/Avatar'
import SvgInitialsMark from '../components/svgCmp/SvgInitialsMark';
import Burger from '../components/Burger';
import { varProps } from '../mainvar';
import Carousel from '../components/Carousel';
import client from "../apollo-client"
import GET_PROJECTS from "../helpers/graphCms"
import SideNav from '../components/SideNav';

export default function Page({projects}) {
  return (
    <>
      <div className='flex flex-col w-full h-screen xl:max-w-[1800px] 3xl:max-w-[2600px] items-center relative'>
        <div className='flex items-center w-full h-[80px] 3xl:h-[70px] fixed top-0 max-w-full shadow-lg header-main px-10 z-20'>
          <div className='flex justify-start-start w-[50px] h-[50px] md:w-[60px] md:h-[60px]'>
              <SvgInitialsMark/>
          </div>
          <div class="flex w-full justify-end space-x-2">
            <div className="font-bold text-orange-pal">Resume</div>
            <div className="font-bold text-orange-pal">Projects</div>
          </div>
                {/* <Burger varProps={varProps} /> */}
        </div>
        <div className="flex flex-wrap-reverse w-full items-center pb-12 mt-28 3xl:pb-18 3xl:mt-32 z-10">
          <div className="w-full h-auto xl:items-center flex flex-wrap md:landscape:max-w-[750px] xl:max-w-[1250px] 3xl:max-w-[1350px] my-auto mx-auto">
            <div className="flex w-full xl:w-1/2 justify-center pt-14 pb-12 xl:py-0">
              <Avatar width={80} height={80} imgUrl="/images/karin-avatar.jpeg"/>
            </div>
            <div className="flex flex-col w-full xl:w-1/2 md:py-[30px] xl:py-[60px] xl:pt-[55px] px-8 portrait:md:px-20 landscape:md:px-28 xl:px-20 3xl:px-6 justify-center xl:justify-start text-center xl:text-left">
              <div className="flex w-full justify-center xl:justify-start">
                <div className="w-[76px] h-[9px] bg-dark-blue mb-4 text-dark-blue"></div>
              </div>
              <p className='font-bold mb-4 md:text-md xl:text-lg'>
                Karin Fernandez, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
              </p>
              <p className='font-light md:text-md xl:text-lg'>
                The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full xl:items-center flex flex-wrap w-full bg-dark-blue">
          <div className='flex md:landscape:max-w-[750px] xl:max-w-[1250px] 3xl:max-w-[1350px] py-24 3xl:pt-24 3xl:pb-12 my-auto mx-auto'>
            <Carousel slidersPerView={3} carouselItems={projects}/>
          </div>
          <div className="flex flex-row items-center py-8 3xl:py-10 w-full justify-center">
            <SideNav />
          </div>
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps() {
  const projectsList = await client.query({
     query: GET_PROJECTS,
    })  
  return {
    props: {
      projects: projectsList?.data?.projects || {}
    }
  }
}