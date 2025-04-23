import React from 'react'
import { Badge } from 'flowbite-react'
const TechStack = () => {
  return (
    <div className="min-h-fit relative w-full p-5 border border-gray-300 profileImageSection ">
      <h2 className="text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 w-full p-5">
        <Badge className=" rounded-full px-3 py-1" > HTML5 </Badge>
        <Badge className=" rounded-full px-3 py-1" > CSS3 </Badge>
             </div>
    </div>
  )
}

export default TechStack
