import Image from 'next/image'
import React from 'react'

const Certification = () => {
  return (
    <div className="border-gray-100">
        <h2 className='flex justify-center bg-gray-100 ml-14 text-5xl text-blue-600 font-sans'>Certificate</h2>
        <section  className='text-white bg-gray-100 mt-4'>
  <div data-aos="zoom-in-up" className="container mx-auto flex flex-col px-5 py-24 justify-center items-center bg-blue-600">
    <Image
      src={require("../../../public/certificate copy.png")}
  alt='IMAGE'
    width={600}
    height={600}
    
      
    />
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mt-20">
        Graphic Designer Certification
      </h1>
      <p className="mb-8 leading-relaxed mt-20 text-3xl">
       

I am a passionate and skilled **Graphic Designer** with a certification completed in 2023 from Uzma Hafiz Institute. With a keen eye for detail and a deep understanding of design principles, I specialize in creating visually compelling graphics that communicate ideas effectively. My expertise spans across various design tools such as Adobe Photoshop, Illustrator, and InDesign, allowing me to craft designs that meet both aesthetic and functional requirements.  

My recent certification has equipped me with the latest industry trends and techniques, ensuring that my work remains fresh, modern, and innovative. I thrive in collaborative environments and am dedicated to delivering high-quality, creative solutions that exceed client expectations.  

I am eager to apply my design skills to bring ideas to life and make a lasting impact through visual storytelling.
      </p>
      <div className="flex w-full justify-center items-end">
    
        
          
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Certification
