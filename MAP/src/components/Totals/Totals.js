import React from 'react'
import './Totals.css'

const Totals = ({dark}) => {
  return (
    <div style={{backgroundColor: 'white'}} className={`Totals ${dark && 'dark'}`}>
      <div>
        <div className='label'>
          Territories in lockdown
        </div>
        <div className='data'>
          56
        </div>
      </div>
      <div>
      <div className='label'>
          people affected
        </div>
        <div className='data'>
        4,479,114,543
        </div>
      </div>
    </div>
  )
}

export default Totals
