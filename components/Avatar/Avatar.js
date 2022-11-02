import Image from "next/image"

const Avatar = ({width, height, imgUrl}) => {
    
    return (
        <div className="">
            <Image
                className="rounded-full h-[33rem] w-[33rem] border-solid border-[30px] shadow-avatar"
                src={imgUrl}
                alt="Karin avatar"
                width={width}
                height={height}
            />
        </div>
    )
}
export default Avatar