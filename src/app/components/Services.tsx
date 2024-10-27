import React from 'react'

const Services = () => {
  return (
    <div>
        <div>
            {/* top side */}
            <div className='flex justify-center h-20 text-5xl text-white bg-cyan-700 p-5'>SERVICES</div>
            {/* bottom side */}
            <div className='h-screen flex justify-between gap-7 items-center bg-zinc-950 '>
            <div className='bg-red-600  text-white ml-5 '>
                <h1 className='font-bold my-10 text-center'>FRONTEND</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptate qui architecto quo reiciendis quibusdam similique rem aperiam. Quis minus, sunt quasi reprehenderit repudiandae possimus a alias in veniam maiores?</p>
            </div>
            <div className='bg-orange-600 text-white '>
                <h1 className='font-bold my-10 text-center'>BACKEND</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero nihil omnis sunt fugit cupiditate dolor veritatis, nisi velit? Fuga quis eveniet inventore saepe dolore quia, aspernatur corrupti rerum facilis?</p>
            </div>
            <div className='bg-blue-600 text-white mr-5'>
                <h1 className='font-bold my-10 text-center'>FULLSTACK</h1>
                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde aspernatur cumque ab aperiam delectus provident. Consequuntur, pariatur, voluptate neque laboriosam necessitatibus sit, nobis dolorum voluptates ea debitis incidunt alias!</p>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Services