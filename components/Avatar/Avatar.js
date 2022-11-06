import Image from "next/image"

const Avatar = ({width, height, imgUrl}) => {
    
    return (
        <Image
            className="rounded-full h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem] xl:h-[31rem] xl:w-[31rem] border-solid border-white border-[18px] md:border-[25px] xl:border-[30px] shadow-avatar"
            src={imgUrl}
            alt="Karin avatar"
            width={width}
            height={height}
        />
    )
}
export default Avatar