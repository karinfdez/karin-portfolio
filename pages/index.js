import Layout from '../components/layout';
import Avatar from '../components/Avatar'

export default function Page() {

  return (
    <>
        <div className="flex w-full xl:w-1/2 justify-center pt-14 pb-12 xl:py-0">
          <Avatar width={80} height={80} imgUrl="/images/karin-avatar.jpeg"/>
        </div>
        <div className="flex flex-col w-full xl:w-1/2 md:py-[30px] xl:py-[60px] xl:pt-[55px] px-8 portrait:md:px-20 landscape:md:px-28 xl:px-20 3xl:px-6 justify-center xl:justify-start text-center xl:text-left">
          <div className="flex w-full justify-center xl:justify-start">
            <div className="w-[76px] h-[9px] bg-dark-blue mb-4 text-dark-blue"></div>
          </div>
          <p className='font-bold mb-4 md:text-md xl:text-lg'>
            Karin Fernandez, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
          </p>
          <p className='font-light md:text-md xl:text-lg'>
            The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
          </p>
        </div>
    </>
  )
}


Page.getLayout = function getLayout(page) {
  return (
    <Layout verticalTitle="about">
      {page}
    </Layout>
  )
}