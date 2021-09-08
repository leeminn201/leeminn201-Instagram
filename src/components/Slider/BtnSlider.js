import React from 'react'

import next from './icons/right-arrow.svg'
import prev from './icons/left-arrow.svg'
function BtnSlide({ direction, action }) {
  return (
    <button className={direction === 'next' ? 'btnNext' : 'btnPrev'} onClick={action}>
      <img src={direction === 'next' ? next : prev} alt=""></img>
    </button>
  )
}

export default BtnSlide
