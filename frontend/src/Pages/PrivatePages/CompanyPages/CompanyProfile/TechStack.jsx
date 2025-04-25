import React from 'react'
import { Badge } from 'flowbite-react'
const TechStack = ({profile}) => {
  let {services} = profile
  return (
    <div className="min-h-fit relative w-full md:p-6 p-4 dash-boxes bg-[#D9EDFF] ">
      <h2 className="text-xl font-semibold">Services</h2>
        <div className="flex flex-wrap gap-2 w-full md:p-5 px-2 py-4">
          {
            services?services.map((item,index)=>{
              return <>
              <Badge className=" rounded-full px-3 py-1 custom-gradient text-white" key={index}> {item.serviceName} </Badge>
              </>
            }):'No data'
          }

             </div>
    </div>
  )
}

export default React.memo(TechStack)
