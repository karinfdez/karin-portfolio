import Image from "../Image";
// import Carousel from "../Carousel";

export default function Project({ project, index }) {
    const { name, images, website } = project;
    return (
        <div className="container-overlay w-1/3 h-14r">
            <Image
                className="h-full img-projects"
                src={
                    images[0]?.resolutions?.desktop?.url ||
                    "https://via.placeholder.com/400x224"
                }
                alt="Project screenshot"
            />
            <p className="title-projects text-dark-blue">{name}</p>
            <div className="overlay"></div>
            <div className="button-projects">
                <a href={website}>SEE MORE</a>
            </div>
        </div>
       
    );
}
