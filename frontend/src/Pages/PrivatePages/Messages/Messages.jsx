import React from 'react'
import Side from '../../../PrivateComponents/Side/Side'
import DashNav from '../../../PrivateComponents/DashNav/DashNav'

const Messages = () => {
  return (
    <div className='flex '>
        <Side/>
        <div className='w-full flex flex-col'>
        <DashNav title={'Messages'} />
     </div>
    </div>
  )
}

export default Messages
