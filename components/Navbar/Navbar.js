import Burger from "../Burger";
import Link from 'next/link'
import SvgInitialsMark from "../svgCmp/SvgInitialsMark";

const Navbar = (props) => {
    const { varProps = {} } = props;
    return (
        <>
            <div className="transition duration-700 ease hover:opacity-75">
                <Link href="/">
                    <SvgInitialsMark width={70} height={70} />
                </Link>
            </div>
        </>
    );
};

export default Navbar;
