import React from 'react'
import {BsTwitter,BsLinkedin,BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div> <a href ='https://twitter.com/home'><BsTwitter  /> </a>
      </div>
      <div> <a href='https://github.com/Bhati90'> <BsGithub/></a>
      </div>
      <div> <a href ="https://www.linkedin.com/in/kishan-bhati-565b66236/"><BsLinkedin/></a>
      </div>
    </div>
  )
}

export default SocialMedia
