import React, { useState } from 'react'
import './Footer.scss'
import { AppWrap } from '../../wrapper'
import MotionWrap from '../../wrapper/MotionWrap'
import { images } from '../../constants'
import { client } from '../../client'

const Footer = () => {

  const [formData,setFormData] = useState({name:'',email:'',message:''})
  const[isFormSubmitted,setIsFormSubmitted] = useState(false)
  const [loading,setLoading] = useState(false)
  
  const{name,email,message} = formData;

  const handleInputChange=(e)=>{
    const {name,value} = e.target;

    setFormData({...formData,[name]:value})
  }  

  const handleSubmit=()=>{
    setLoading(true);


    const contact ={
      _type:'contact',
      name: formData.name,
      email:formData.email,
      message:formData.message,
    }

    client.create(contact).then(()=>{
      setLoading(false);
      setIsFormSubmitted(true)
    }).catch((err)=>console.log(err))
  }
  return (
    <>
    <h2 className='head-text'>Take a Coffe & chat with me</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src = {images.email} alt = "email"/>
        <a href='mailto:bhatikaran634@gmail.com' className='p-text'>bhatikaran634@gmail.com</a>
      </div>

      <div className="app__footer-card">
        <img src = {images.mobile} alt = "mobile"/>
        <a href='tel: +91(123) 456-789' className='p-text'>+1 (123_ 456-789)</a>
      </div>
    </div>
{!isFormSubmitted?( 
    <div className="app__footer-form app__flex">
      <div className="app__flex">
        <input className='p-text' type = 'text' placeholder='Your Name' name = 'name' value ={name} onChange={handleInputChange}/>
      </div>

      <div className="app__flex">
        <input className='p-text' type = 'email' placeholder='Your Email' name = 'email' value ={email} onChange={handleInputChange}/>
      </div>
<div>
      <textarea className='p-texxt' 
      placeholder='Your message'
      value = {message}
      name="message"
      onChange={handleInputChange}
      />
      </div>

      <button type = "button" className='p-text' onClick={handleSubmit}>{!loading?'Send message':'Sending.....'}</button>
    </div>)
    : (<div>
<h3 className='head-text'>Thank You for getting in touch!</h3>
    </div>)}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer,'app__footer'),
  "contact",
  "app__whitebg"
)

