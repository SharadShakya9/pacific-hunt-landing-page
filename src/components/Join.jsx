import React from 'react'
import JoinImage from "../assets/images/joinimage.png"
import Button from './ui/Button'

const Join = () => {
  return (
    <div className='w-full bg-white p-[100px]'>
      <div className='relative mt-[100px] flex items-end'>
        <img className='absolute right-0 z-10' src={JoinImage} alt="" />

        <div className='w-full bg-blue-3 px-[50px] h-[368px] rounded-xl flex flex-col justify-evenly'>
            <p className='text-24-semibold tracking-[-0.02rem] text-light-1'>Join <span className='text-blue-1'>Pacific Hunt</span> today. Connect, Grow, Succeed.</p>

            <p className='text-16-normal w-2/3 text-light-4'>Whether you&apos;re seeking your next career move or searching for top talent, our platform offers the perfect avenue to connect and thrive.</p>

            <div className='flex gap-6'>
                <Button type="dark">Join as jobseeker</Button>
                <Button type="light">Join as employer</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Join
