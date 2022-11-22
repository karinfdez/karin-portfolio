import Layout from "../components/layout"
import Image from "next/image"

export default function Custom404() {
    return (
        <Layout>
            <div className="flex w-full h-full justify-center items-center">
                <div className="flex justify-center items-center space-x-6">
                    <div className="text-[#173342] font-bold text-[16rem] no-page-found">404</div>
                    <div className="flex flex-col space-y-7">
                        <Image
                            className="w-28 h-28 logo-404-page"
                            src="/icons/404_page_icon.png"
                            alt="404 page broken"
                            width={100}
                            height={100}
                        />
                        <p className="w-full text-xl text-[#4b7788] font-fold italic">Page not found</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
  }
