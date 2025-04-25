import React from 'react'
import Side from '../../../PrivateComponents/Side/Side'
import DashNav from '../../../PrivateComponents/DashNav/DashNav'
import MessageComponent from './MessageComponent'

const Messages = () => {
  return (
    <div className='flex '>
        <Side/>
        <div className='w-full h-full  flex flex-col flex-1 md:ml-[80px] lg:ml-[250px]'>
        <DashNav title={'Messages'} />
        <div className='  h-[calc(100vh-70px)] max-w-full w-full mx-auto'>
        <MessageComponent/>
        </div>
     </div>
    </div>
  )
}

export default Messages


// ml-[80px] lg:ml-[250px]