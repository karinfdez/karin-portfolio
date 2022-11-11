import Layout from '../components/layout';
import Avatar from '../components/Avatar'
import Image from 'next/image';

export default function Projects() {

  return (
    <Layout verticalTitle="projects">
        <div className='lg:max-w-[700px] mx-auto'>
            <div className="3xl:w-[700px] mx-auto relative rounded-xl overflow-hidden bg-hover-blue" style={{marginRight: "0px"}}><div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" style={{backgroundPosition: "10px 10px"}}></div><div className="relative rounded-xl overflow-auto p-8 max-h-[800px]">
                <div className="relative">
                    <div className="columns-3xs gap-8 space-y-8">
                    <div className="relative aspect-w-16 aspect-h-9">
                        <Image width={400} height={400} className="w-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2952&amp;q=80"/>
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                    </div>
                    <div className="relative aspect-w-1 aspect-h-1">
                        <Image width={400} height={400} className="w-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2902&amp;q=80"/>
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                    </div>
                    <div className="relative hidden sm:block aspect-w-1 aspect-h-1">
                        <Image width={400} height={400} className="w-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3131&amp;q=80"/>
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                    </div>
                    <div className="relative hidden sm:block aspect-w-16 aspect-h-9">
                        <Image width={400} height={400} className="w-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3132&amp;q=80"/>
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div></div>
        </div>
    </Layout>
  )
}
