import Layout from "../components/Layout";
import Avatar from "../components/Avatar";
import Image from "next/image";
import Link from "next/link";
import GET_PROJECTS from "../helpers/graphCms";
import client from "../apollo-client";
import Carousel from "../components/Carousel";

//test
export default function Projects({ projects }) {
  return (
    <main className="w-full h-auto xl:items-center flex flex-wrap md:landscape:max-w-[750px] xl:max-w-[1250px] 3xl:max-w-[1350px] my-auto mx-auto">
      <Carousel slidersPerView={3} carouselItems={projects} />
    </main>
  );
}

export async function getServerSideProps() {
  const projectsList = await client.query({
    query: GET_PROJECTS,
  });
  return {
    props: {
      projects: projectsList?.data?.projects || {},
    },
  };
}

Projects.getLayout = function getLayout(page) {
  return <Layout verticalTitle="projects">{page}</Layout>;
};
