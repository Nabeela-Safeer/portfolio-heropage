
import Image from "next/image"
import Link from "next/link"


const Hero = () => {
  return (
    

    
    <section className='flex justify-items-center bg-zinc-900 ' >
      <div className="flex text-white">
        {/* left side */}
        <div className=' text-sm text-center p-20 w-100% m-20 ml-4 ' >
     
          
        <h4 className='font-serif font-bold text-xs'>Web Developer</h4>
        <h1 className='text-5xl '>Hi, my name is <br/><i> Nabeela_Safeer</i></h1>

        <p className='flex align-text-bottom p-5 mt-8 font-semibold font-serif'>Proficient in a range of technologies including HTML, CSS, TypeScript, React, and  with a strong focus on creating responsive and scalable solutions. Seeking to leverage my expertise in a dynamic team to deliver high-quality digital experiences that drive user engagement and business growth.</p>
        <button className="bg-cyan-800 text-white w-20 hover:text-orange-900"><Link href="/Contact"></Link> contact us</button>
         </div>
        {/* right side */}

        <div className="flex justify-between p-15 mr-44 mb-40 mt-20  ">
        <Image src="/123.jpeg" alt="profile pic" width={1500} height={50}></Image>
         </div>

      </div>
    </section>
    
    

  )
}

export default Hero