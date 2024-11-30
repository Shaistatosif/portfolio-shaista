import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-600'>
      <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <Image src={require("../../../public/shaista.png")} alt='monogram' width={90} height={90} />
      <span className="ml-3 text-xl font-sans font-bold text-white">My Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-green-400 font-sans">About</a>
      <a className="mr-5 hover:text-green-400 font-sans">Skills</a>
      <a className="mr-5 hover:text-green-400 font-sans">Certification</a>
      <a className="mr-5 hover:text-green-400 font-sans">Contact Info</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0 font-sans text-black">Download Cv
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
