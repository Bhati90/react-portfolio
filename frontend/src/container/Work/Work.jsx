import React, { useState } from 'react'
import './Work.scss'
import { AppWrap } from '../../wrapper'

const Work = () => {
  const handleWorkFilter=(item)=>{

  }

  const [activeFilter,setActiveFilter] = useState('All')

  return (
    <>
    <h2 className='head-text' >My Creative <span>Portfolio</span><br/>Section</h2>
    <div className="app__work-filter">
      {['UI/UX','Web App','MObile App','React Js',].map((item,index)=>(
      <div className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active':' ' }`} key={index}
      onClick={()=>handleWorkFilter(item)}>
        {item}
      </div>
      ))}</div></>
  )
}

export default AppWrap(Work,'work')
