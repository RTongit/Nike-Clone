import React from 'react'
import { footerLogo } from '../assets/images'
import { copyrightSign } from '../assets/icons'
import { socialMedia,footerLinks } from '../constants'
const Footer = () => {
  return (
    <footer>
    <div className='flex flex-col md:flex-row max-md:gap-20'>
      <div className="w-[40%] md:w-[25%]">
        <a href="/"><img src={footerLogo} alt="footerLogo" width={150} height={46} className='mb-3'/></a>
        <p className='mb-10 leading-8'>Get shoes ready for the new term at your nearest Nike store.Find Your perfect Size in Store.Get reviews</p>
        <div className='flex flex-row justify-start gap-5'>
        { socialMedia.map((temp)=><div className='border-8 rounded-full border-white bg-white'>
        <img src={temp.src} alt={temp.alt} key={temp.alt}></img>
       </div>
      )}
        </div>
      </div>

      <div className='flex flex-row  md:w-[75%] md:justify-around max-md:justify-start box-border gap-10'>
        {footerLinks.map((temp) => (
          <div key={temp.title} className="mb-4">
            <h4 className="font-bold">{temp.title}</h4>
            <ul>
              {temp.links.map((link, index) => (
                <li key={index} className="text-sm">
                  <a href={link.href} className="hover:underline leading-8">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>

    <div className='flex gap-2 mt-5'>
      <img src={copyrightSign} alt="c" /> <span> Copyright.All Rights Reserved</span>
    </div>
    </footer>

  )
}

export default Footer
