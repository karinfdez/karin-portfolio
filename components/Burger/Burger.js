import { slide as Menu } from 'react-burger-menu'
import SvgInitialsMarkLight from "../svgCmp/SvgInitialsMarkLight";
import Link from 'next/link'


const Burger = ({varProps}) => {
    const {
        textContent: { menu = {} },
    } = varProps;
    
    const showSettings = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Menu right width="100%" disableAutoFocus>
                <div className='w-[50px] h-[50px] md:w-[90px] md:h-[90px]'>
                    <SvgInitialsMarkLight/>
                </div>
                {menu.length > 0 &&
                <div className='!flex flex-col w-full items-center pt-40 text-[50px] font-[700] 3xl:pt-60 3xl:space-y-1'>
                    {menu.map((elm, index) => {
                        const {
                            id = "",
                            className = "",
                            href = "",
                            content = "",
                            newTab = false,
                        } = elm;
                        return (
                            <Link
                                id={id}
                                key={index}
                                className="flex transition tracking-[5px] hover:xl:scale-[1.10] xl:ease-in xl:duration-300 transform-gpu"
                                href={href}
                                {...(newTab
                                    ? {
                                        target: "_blank",
                                        rel: "noreferrer noopener",
                                    }
                                    : {})}
                            >
                                {content}
                            </Link>
                        );
                    })}
                    </div>}
            </Menu>
        </>
    );
};

export default Burger;
