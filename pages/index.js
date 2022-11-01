import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SvgInitialsMark from '../components/svgCmp/SvgInitialsMark';
import Burger from '../components/Burger/Burger';
import {varProps} from '../mainvar'

export default function Home() {
  return (
    <div className='flex w-full h-screen bg-red-300 px-2 md:px-10 min-w[380px]'>
      <div className='mt-4 md:mt-4 lg:mt-6 lg:mt-16 w-full lg:max-w-[1700px] h-full mx-auto relative'>
        <div className='flex justify-center items-center w-full'>
          <div className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]'>
            <SvgInitialsMark/>
          </div>
          <Burger varProps={varProps} />
        </div>
      </div>
    </div>
  )
}
