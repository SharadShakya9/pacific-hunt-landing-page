import React from 'react'

const CategoriesCard = ({ name, positions, icon }) => {
  return (
    <div className='w-[full] mb-5 flex p-[24px] items-center gap-4 rounded-xl border border-light-4 hover:border-blue-1 hover:shadow-card group'>
      <div className='group'>{icon}</div>
      <div className='  flex flex-col gap-2'>
        <p className='text-dark-3 text-18-medium group-hover:text-blue-1'>{name}</p>
        <p className='text-dark-5 text-14-normal'>{positions} Open position</p>
      </div>
    </div>
  )
}

export default CategoriesCard
