import React from 'react'
import ContactHeaderimg from '../Components/Images/ContatHeader.png'

function ContactHeader() {
  return (
    <div>
        <h2 className='h2text'>Rewardify</h2>
        <img src={ContactHeaderimg} className='contactHeader'alt ='contactHead'></img>
    </div>
  )
}

export default ContactHeader