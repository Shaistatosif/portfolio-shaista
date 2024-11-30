"use client"
import Image from 'next/image'
import React from 'react'
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <div className='bg-gray-100'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 font-sans bg-purple-100 ">My Name Is Shaista Toseef And I Am 
        <br className="hidden lg:inline-block font-sans" /><Typewriter text="Program Developer And Student Of G.I.A.I.CProfessional Developer In Typescript And Agentic A.I And Machine Learning And Graphic Designer" speed={150} />
      </h1>
      <p className="mb-8 leading-relaxed font-sans">A graphic designer and web developer is a versatile professional who combines creativity with technical expertise to craft visually engaging and functional digital experiences. They design compelling visuals, logos, and branding elements that captivate audiences while ensuring seamless user interfaces and intuitive navigation on websites. By blending artistic design with coding skills, they bring concepts to life, optimizing websites for performance, responsiveness, and accessibility. Their ability to balance aesthetics with functionality allows them to create user-centered solutions that enhance brand identity and elevate online presence, making them indispensable in today’s digital-first world. </p>
      <div className="flex justify-center">
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image src={require("../../../public/purple-logo.png")} alt='hero' width={300} height={300} />
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
