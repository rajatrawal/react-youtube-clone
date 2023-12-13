import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ['All', 'JavaScript', 'Stocks', 'PHP', 'Computer', 'Network', 'OPPS']
  return (
    <div className=' ' >

      <div className='flex  overflow-y-hidden' >
        {
          list.map((e) => (
            <Button text={e} key={e} />

          ))

        }




      </div >
    </div >
  )
}

export default ButtonList