import { slide as Menu } from "react-burger-menu";
import SvgInitialsMarkLight from "../svgCmp/SvgInitialsMarkLight";
import Link from "next/link";

const Burger = ({ varProps }) => {
  const {
    textContent: { menu = {} },
  } = varProps;

  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Menu className="relative" right width="100%" disableAutoFocus>
        <div className="absolute top-6 md:top-10">
          <div className="w-[60px] h-[60px] md:w-[90px] md:h-[90px]">
            <SvgInitialsMarkLight />
          </div>
        </div>
        {menu.length > 0 && (
          <div className="!flex flex-col w-full justify-center items-center text-[50px] font-[700] lg:space-y-3 3xl:space-y-1 xl:py-[60px] h-[600px] landscape:md:h-auto portrait:md:h-[900px] xl:h-[900px] 3xl:h-[1000px] my-auto">
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
          </div>
        )}
      </Menu>
    </>
  );
};

export default Burger;
