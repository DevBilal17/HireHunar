import React from 'react'

const CardContent = ({icon,head,para,c}) => {
  return (
    <div className={` md:w-[50%] w-full flex flex-col items-start gap-1 processCard ${c} `}>
      <div className=''>{icon}</div>
      <h3 className='text-2xl font-semibold mt-3'>{head}</h3>
      <p className='text-gray-600 max-w-[340px] w-full'>{para}</p>
    </div>
  )
}

export default CardContent
