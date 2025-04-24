import React from 'react'
import AddJobButton from '../../../../AnimatedComponents/AddJobButton'
import { useNavigate } from 'react-router-dom'

const AddJob = () => {
    const navigate = useNavigate();
    const goToPage = ()=>{
        navigate('/post-job')
    }
  return (
    <div className="bg-white flex-1 md:p-6 p-4 flex items-center justify-between rounded-2xl shadow-md relative">
      <p className="text-gray-600">Wants to add a new one?</p>
      <AddJobButton onClick={goToPage} />
    </div>
  )
}

export default AddJob
