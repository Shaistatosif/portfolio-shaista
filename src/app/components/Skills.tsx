import React from 'react'

const Skills = () => {
  return (
    <div className='bg-gray-100'>
      <section className="text-gray-600 body-font">
  <div data-aos="zoom-in-up" className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      
      <h1 data-aos="zoom-in-up" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600 font-serif">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {/*skills */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-blue-600 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-400 text-white flex-shrink-0">
            
            </div>
            <h2 className="text-white font-serif text-lg title-font font-medium">
            HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-full bg-white '>
              <div className='absolute bg-yellow-500 h-1 rounded-xl w-[80%]'></div>
            </div>
          <p className='text-white font-bold text-right'>80%</p>




      
              
          
          </div>
        </div>
      </div>
       {/*skills */}
       <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-blue-600 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-400 text-white flex-shrink-0">
            </div>
            <h2 className="text-white font-serif text-lg title-font font-medium">
            CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-full bg-white '>
              <div className='absolute bg-yellow-500 h-1 rounded-xl w-[80%]'></div>
            </div>
          <p className='text-white font-bold text-right'>80%</p>




      
              
          
          </div>
        </div>
      </div>
       {/*skills */}
       <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-blue-600 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-400 text-white flex-shrink-0">
        
            </div>
            <h2 className="text-white font-serif text-lg title-font font-medium">
            Typescript
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-full bg-white '>
              <div className='absolute bg-yellow-500 h-1 rounded-xl w-[70%]'></div>
            </div>
          <p className='text-white font-bold text-right'>70%</p>




      
              
          
          </div>
        </div>
      </div>
    </div>
    

  </div>
</section>

    </div>
  )
}

export default Skills
