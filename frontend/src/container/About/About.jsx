import React, { useEffect, useState } from 'react'
import{motion} from'framer-motion'
import './About.scss'
// import { images } from '../../constants'
import { AppWrap } from '../../wrapper'
import { client, urlFor ,data } from '../../client'

// const abouts =[
//   {title: 'web Developement', description:'I am a good developer',imgUrl:images.about01},
//   {title: 'web Design', description:'I am a good developer',imgUrl:images.about02},
//   {title: 'UI/UX', description:'I am a good developer',imgUrl:images.about03},
//   {title: 'Backend', description:'I am a good developer',imgUrl:images.about04}
// ]

const About = () => {
  const[abouts,setAbouts] = useState([])

  useEffect(()=>{
const query = '*[_type == "abouts"]'
client.fetch(query).then((data)=>setAbouts(data))
  },[]);
  return (
    <>
    <h2 className='head-text'>
      I Konw that
      <span>Good Design</span>
      <br />
      means
      <span>Good Business</span>
      
      </h2>
      <div className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'tween'}}
          className='app__profile-item'
           key={about.title+index}>
            <img src={urlFor(about.imgUrl)} alt ={about.title}/>

            <h2 className='bold-text' style={{margin:20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop:5}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
      </>
  )
}

export default AppWrap(About,'about')

