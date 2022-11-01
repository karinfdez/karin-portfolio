import Image from "../Image";
import Layout from "../Layout";
import image404 from "../../page404Logo.png";

const PageNoMatch = (props) => {
    const { varProps } = props;
    const {
        textContent: { noMatchPage = {} },
    } = varProps;

    return (
        <Layout
            namePage=""
            navbarWidth={10}
            navbarHeigth={40}
            varProps={varProps}
        >
            <div className="flex flex-col pt-44">
                <Image
                    className="flex logo-404-page w-32 h-36 mx-auto"
                    src={image404}
                    alt="logo-404"
                />
                <div className="flex mx-auto font-raleway text-light-blue text-4xl">
                    {noMatchPage.message}
                </div>
            </div>
        </Layout>
    );
};
export default PageNoMatch;
