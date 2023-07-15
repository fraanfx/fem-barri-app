import React from 'react'

const PrintSpecs = ({title, specs}) => {
    console.log("[specs]", specs.length)
  return (
    <div className='mb-10'>
        <h3 className="mb-10">{title}</h3>
            {specs.map((spec) => (
                <li>{spec}</li>
            )
            )}
       
    </div>
  )
}

export default PrintSpecs