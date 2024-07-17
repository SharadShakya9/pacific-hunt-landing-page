import React from 'react'
import GoogleLogo from "../assets/images/logos_google.png"
import ZohoLogo from "../assets/images/logo_zoho.png"
import AirBnbLogo from "../assets/images/logo_airbnb.png"
import MicrosoftLogo from "../assets/images/logo_microsoft.png"
import ClickUpLogo from "../assets/images/logo_clickup.png"

const RenownedCompanies = () => {
  return (
    <div className='w-full bg-light-2 flex flex-col gap-[50px] justify-center py-[100px]'>
      <p className='text-center text-24-semibold text-dark-3'>Join in globally <span className='text-blue-1'>renowned</span> companies</p>

      <div className='flex justify-evenly'>
        <img src={GoogleLogo} alt="" />
        <img src={ZohoLogo} alt="" />
        <img src={AirBnbLogo} alt="" />
        <img src={MicrosoftLogo} alt="" />
        <img src={ClickUpLogo} alt="" />
      </div>
    </div>
  )
}

export default RenownedCompanies
