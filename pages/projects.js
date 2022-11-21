import Layout from '../components/layout';
import Avatar from '../components/Avatar'
import Image from 'next/image';
import Link from 'next/link';
import GET_PROJECTS from "../helpers/graphCms"
import client from "../apollo-client"
import Carousel from '../components/Carousel';

export default function Projects({projects}) {
  return  <Carousel slidersPerView={3} carouselItems={projects}/>
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

Projects.getLayout = function getLayout(page) {
    return (
      <Layout verticalTitle="projects">
        {page}
      </Layout>
    )
  }