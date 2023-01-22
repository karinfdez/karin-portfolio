import Avatar from "../components/Avatar";
import SvgInitialsMark from "../components/svgCmp/SvgInitialsMark";
import Burger from "../components/Burger";
import Carousel from "../components/Carousel";
import client from "../apollo-client";
import GET_PORTFOLIO_DATA from "../helpers/graphCms";
import SideNav from "../components/SideNav";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Page({ projects, about, description }) {
  return (
    <>
      <div className="flex flex-col w-full h-screen xl:max-w-[1800px] 3xl:max-w-[2600px] items-center relative">
        <Navbar />
        <div className="flex flex-wrap-reverse w-full items-center pb-14 3xl:pb-20 mt-24 md:mt-36">
          <div className="w-full h-auto xl:items-center flex flex-wrap md:landscape:max-w-[750px] xl:max-w-[1250px] 3xl:max-w-[1350px] my-auto mx-auto">
            <div className="flex w-full xl:w-1/2 justify-center pt-14 pb-12 xl:py-0">
              <Avatar
                width={80}
                height={80}
                imgUrl="/images/karin-avatar.jpeg"
              />
            </div>
            <div className="flex flex-col w-full xl:w-1/2 md:py-[30px] xl:py-[60px] xl:pt-[55px] px-8 portrait:md:px-20 landscape:md:px-28 xl:px-20 3xl:px-6 justify-center xl:justify-start text-center xl:text-left">
              <div className="flex w-full justify-center xl:justify-start">
                <div className="w-[76px] h-[9px] bg-dark-blue mb-4 text-dark-blue"></div>
              </div>
              <div
                className="font-bold mb-4 md:text-md xl:text-lg text-medium-blue"
                dangerouslySetInnerHTML={{ __html: about?.html }}
              />
              <div
                className="font-light md:text-md xl:text-lg text-medium-blue"
                dangerouslySetInnerHTML={{ __html: description?.html }}
              />
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="w-full h-full xl:items-center flex flex-wrap w-full bg-dark-blue"
        >
          <div className="flex w-full md:landscape:max-w-[750px] xl:max-w-[1250px] 3xl:max-w-[1350px] pt-24 mx-auto px-10 md:portrait:px-20">
            <Carousel carouselItems={projects} />
          </div>
          <div className="flex flex-row items-center py-8 3xl:py-10 w-full justify-center bg-dark-blue">
            <SideNav />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const portfolioData = await client.query({
    query: GET_PORTFOLIO_DATA,
  });
  return {
    props: {
      projects: portfolioData?.data?.portfolioProfile?.projects || {},
      about: portfolioData?.data?.portfolioProfile?.aboutText || null,
      description: portfolioData?.data?.portfolioProfile?.description || null,
    },
  };
}
