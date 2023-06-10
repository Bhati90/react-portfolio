import React, { useEffect, useState } from 'react'
import './Skills.scss'
import {motion} from 'framer-motion'
import { client, urlFor } from '../../client';
import { AppWrap } from '../../wrapper';

const Skills = () => {
  const[experiences,setExperiences] = useState([])
  const[skills,setSkills] = useState([])

  useEffect(()=>{
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data)=>{
      setExperiences(data);
      
    });

    client.fetch(skillsQuery).then((data)=>{
      setSkills(data);
      
    });
  },[])

  return (
    <>
    <h2 className='head-text'> Skills & Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="div app__skills-list">
          {
            skills.map((skill)=>(
              <motion.div
              key={skill.name}
              whileInView = {{opacity:[0,1]}}
              transtion={{duration:0.5}}
              className="app__skills-item app__flex" 

              >
                <div className="app__flex" style={{backgrondColor:skill.bgcolor}}>
               <img src = {urlFor(skill.icon)} alt = {skill.name}/>
               </div>
               <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))
          }
          </motion.div>
          </div>
          </>
  )
}

export default AppWrap(Skills,'skills')
