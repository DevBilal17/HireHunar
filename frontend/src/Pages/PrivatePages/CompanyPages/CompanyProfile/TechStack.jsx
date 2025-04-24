import React from 'react'
import { Badge } from 'flowbite-react'
const TechStack = () => {
  return (
    <div className="min-h-fit relative w-full md:p-6 p-4 dash-boxes bg-[#D9EDFF] ">
      <h2 className="text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 w-full md:p-5 px-2 py-4">
        <Badge className=" rounded-full px-3 py-1 custom-gradient text-white" > HTML5 </Badge>
        <Badge className=" rounded-full px-3 py-1  custom-gradient text-white" > CSS3 </Badge>
        <Badge className=" rounded-full px-3 py-1 custom-gradient text-white" > HTML5 </Badge>
        <Badge className=" rounded-full px-3 py-1  custom-gradient text-white" > CSS3 </Badge>
        <Badge className=" rounded-full px-3 py-1 custom-gradient text-white" > HTML5 </Badge>
        <Badge className=" rounded-full px-3 py-1  custom-gradient text-white" > CSS3 </Badge>
        <Badge className=" rounded-full px-3 py-1 custom-gradient text-white" > HTML5 </Badge>
        <Badge className=" rounded-full px-3 py-1  custom-gradient text-white" > CSS3 </Badge>
        <Badge className=" rounded-full px-3 py-1 custom-gradient text-white" > HTML5 </Badge>
        <Badge className=" rounded-full px-3 py-1  custom-gradient text-white" > CSS3 </Badge>
             </div>
    </div>
  )
}

export default TechStack
