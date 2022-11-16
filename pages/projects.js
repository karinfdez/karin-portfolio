import Layout from '../components/layout';
import Avatar from '../components/Avatar'
import Image from 'next/image';
import Link from 'next/link';
import GET_PROJECTS from "../helpers/graphCms"
import client from "../apollo-client"
import Carousel from '../components/Carousel';

export default function Projects({projects}) {
  return (
    <Layout verticalTitle="projects">
        {/* <div className='flex lg:max-w-[700px] mx-auto items-center'>
            <div className="3xl:w-[700px] mx-auto relative rounded-sm overflow-hidden" style={{marginRight: "0px"}}><div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" style={{backgroundPosition: "10px 10px"}}></div><div className="relative rounded-xl p-8 max-h-[800px]">
                <div className="relative">
                    <div className="columns-3xs gap-8 space-y-8">
                        {projects.map(({name, image, url}, index) => {
                            if(index === 0 || index === index + 4) {
                                return (
                                    <>
                                        <div className="relative aspect-w-16 aspect-h-9">
                                            <Image alt="project portfolio" width={400} height={400} className="w-full object-cover rounded-lg" src={image[0]?.url}/>
                                            <div className="absolute top-0 left-0 w-full h-full inset-0 ring-1 ring-inset space-y-2 ring-black/10 rounded-lg bg-black hover:opacity-70 opacity-0 ease-in-out duration-1000 flex flex-col justify-center items-center">
                                                <p className="text-white text-md">{name}</p>
                                                <Link id="style-2" data-replace="See more" className="text-white text-md text-center" href={url}><span>See more</span></Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            if(index === 1 || index === index + 4) {
                                return (
                                    <>
                                        <div className="relative aspect-w-16 aspect-h-9">
                                            <Image alt="project portfolio" width={400} height={400} className="w-full object-cover rounded-lg" src={image[0]?.url}/>
                                            <div className="absolute top-0 left-0 w-full h-full inset-0 ring-1 ring-inset space-y-2 ring-black/10 rounded-lg bg-black hover:opacity-70 opacity-0 ease-in-out duration-1000 flex flex-col justify-center items-center">
                                                <p className="text-white text-md">{name}</p>
                                                <Link id="style-2" data-replace="See more" className="text-white text-md text-center" href={url}><span>See more</span></Link>
                                            </div>
                                        </div>   
                                    </>
                                )
                            }
                            if(index === 2 || index === index + 4) {
                                return (
                                    <>
                                        <div className="relative hidden sm:block aspect-w-1 aspect-h-1">
                                            <Image width={400} height={400} className="w-full object-cover rounded-lg" src={image[0]?.url}/>
                                            <div className="absolute top-0 left-0 w-full h-full inset-0 ring-1 ring-inset space-y-2 ring-black/10 rounded-lg bg-black hover:opacity-70 opacity-0 ease-in-out duration-1000 flex flex-col justify-center items-center">
                                                <p className="text-white text-md">{name}</p>
                                                <Link id="style-2" data-replace="See more" className="text-white text-md text-center" href={url}><span>See more</span></Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            if(index === 3 || index === index + 4) {
                                return (
                                    <>
                                        <div className="relative hidden sm:block aspect-w-16 aspect-h-9">
                                            <Image width={400} height={400} className="w-full object-cover rounded-lg"/>
                                            <div className="absolute top-0 left-0 w-full h-full inset-0 ring-1 ring-inset space-y-2 ring-black/10 rounded-lg bg-black hover:opacity-70 opacity-0 ease-in-out duration-1000 flex flex-col justify-center items-center">
                                                <p className="text-white text-md">{name}</p>
                                                <Link id="style-2" data-replace="See more" className="text-white text-md text-center" href={url}><span>See more</span></Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                          
                        })}
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div></div>
        </div> */}
        <Carousel slidersPerView={3} carouselItems={projects}/>
    </Layout>
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