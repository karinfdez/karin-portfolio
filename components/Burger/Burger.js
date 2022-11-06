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
        <Menu right width={"100%"} disableAutoFocus>
            <Link href="/">
                <SvgInitialsMarkLight width={70} height={70} />
            </Link>
            {menu.length > 0 &&
                menu.map((elm, index) => {
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
                            className={className}
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
        </Menu>
    );
};

export default Burger;
