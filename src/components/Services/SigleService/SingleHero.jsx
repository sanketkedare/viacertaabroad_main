import { useParams } from 'next/navigation';
import React from 'react'

const SingleHero = ( ) => {
    const { service } = useParams();
  return (
    <div className='min-h-screen'>
         Single Page Services :   {service}
     </div>
  )
}

export default SingleHero
