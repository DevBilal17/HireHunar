import React from 'react'
import Side from '../../../PrivateComponents/Side/Side'
import DashNav from '../../../PrivateComponents/DashNav/DashNav'
import MessageComponent from './MessageComponent'

const Messages = () => {
  return (
    <div className='flex '>
        <Side/>
        <div className='w-full flex flex-col'>
        <DashNav title={'Messages'} />
        <MessageComponent/>
     </div>
    </div>
  )
}

export default Messages
