import React from 'react'
import { FaInstagram ,FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
           <a href='https://github.com/khayanga'><FaGithub/></a> 
        </div>
        <div>
            <FaInstagram/>
        </div>
        <div>
           <a href="https://app.netlify.com/teams/khayanga/overview"><SiNetlify/></a>
        </div>
    </div>
  )
}

export default SocialMedia