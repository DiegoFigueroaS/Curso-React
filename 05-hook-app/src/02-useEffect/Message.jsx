import React from 'react'
import { useEffect } from 'react'

const Message = () => {

    useEffect(() => {

        let onMouseMove = ( event ) => {
            const coords = {x: event.x, y: event.y}
            console.log(coords);
            
        }

        window.addEventListener('mousemove', onMouseMove)
      return () => {
        window.removeEventListener('mousemove', onMouseMove)
        
      }
    }, [])
    

  return (
    <div>
      <h1>Usuario ya existente</h1>
    </div>
  )
}

export default Message
