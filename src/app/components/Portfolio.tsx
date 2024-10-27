import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Portfolio = () => {
  return (
        <div>
          <div className='flex justify-center h-20 text-5xl text-white bg-cyan-700 p-5'>
            PROJECTS
          </div>

          <div className='h-screen p-20 bg-zinc-950 items-center text-white'>
            {/* top side */}
            <div className='flex justify-between mt-20'>
              <div className=' w-[300px] h-[300px] items-center'>
               <Image src="/Calculator Animation.gif" alt='simple calculator' height={500} width={400}></Image> 
              <div className='text-lg mt-3 cursor-pointer hover:text-orange-900'>
              <span><Link href="https://github.com/Nabeela-Safeer/Simple-Calculator_app.git" >Simple Calculator App</Link></span>

              </div>
              </div>

            <div className=' w-[300px] h-[300px] items-center'>
              <Image src="/Clock .jpeg" alt='digital clock' height={500} width={400}></Image> 
            <div className='text-lg mt-3 cursor-pointer hover:text-orange-900'>
              <span><Link href="https://github.com/Nabeela-Safeer/Digital-Clock_App.git" >Digital Clock-App</Link></span>
              
            </div>
            </div>

            <div className=' w-[300px] h-[300px] items-center'>
              <Image src="/password.gif" alt='password generator app' height={500} width={400}></Image> 
            <div className='text-lg mt-3 cursor-pointer hover:text-orange-900'>
              <span><Link href="https://github.com/Nabeela-Safeer/Pasword-Generator_app.git" >Password Generator-App</Link></span>
              
            </div>
            </div>
            
            
            
            
            
            
            
            </div>

          </div>
         
        </div>
    
    
  )
}

export default Portfolio