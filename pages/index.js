import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SvgInitialsMark from '../components/svgCmp/SvgInitialsMark';
import Burger from '../components/Burger';
import SideNav from '../components/SideNav';
import {varProps} from '../mainvar';
import Avatar from '../components/Avatar';

export default function Home() {
  return (
    <div className='flex w-full h-full px-2 md:px-10 min-w-[380px] justify-center'>
      <div className='pt-6 lg:pt-16 w-full lg:max-w-[2300px] h-full bg-red-200'>
        <div className='flex justify-center items-center w-full relative'>
          <div className='w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]'>
            <SvgInitialsMark/>
          </div>
            <Burger varProps={varProps} />
        </div>
        <div className="flex flex-wrap lg:px-32 mt-10 lg:mt-20">
            <div className="flex bg-green-200 w-full lg:w-1/2 h-full justify-center">
              <Avatar width={80} height={80} imgUrl="/images/karin-avatar.jpeg"/>
            </div>
            <div className="flex flex-col bg-blue-200 w-full lg:w-1/2 pt-16">
              <p className='font-bold mb-4'>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
              </p>
              <p className=''>
                The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}
