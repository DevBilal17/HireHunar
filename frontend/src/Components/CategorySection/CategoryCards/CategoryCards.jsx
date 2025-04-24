import React from 'react'
import CategoryCard from './CategoryCard/CategoryCard'

const CategoryCards = () => {
  let jobId;
  return (
    <div className='mt-8 flex justify-between flex-wrap categoryCards '>
      <CategoryCard link={`/f-job/job/${jobId}`} company={'Logico'} companyicon={''} job={'Front-End Developer'} location={'Pakistan, Faisalabad'} tag={'Technology'} jobtime={'Remote Job'} salary={'Rs:70K'} posttime={'2 Days'}/>
      <CategoryCard company={'Logico'} companyicon={''} job={'Front-End Developer'} location={'Pakistan, Faisalabad'} tag={'Technology'} jobtime={'Remote Job'} salary={'Rs:70K'} posttime={'2 Days'}/>
      <CategoryCard company={'Logico'} companyicon={''} job={'Front-End Developer'} location={'Pakistan, Faisalabad'} tag={'Technology'} jobtime={'Remote Job'} salary={'Rs:70K'} posttime={'2 Days'}/>
    </div>
  )
}

export default CategoryCards
