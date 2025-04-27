import React from 'react'

interface PrintSpecsProps {
  title: string,
  specs: [string]
}

const PrintSpecs = ({title, specs} : PrintSpecsProps) => {
    console.log("[specs]", specs.length)
  return (
    <div className='offer-specs-container mb-10'>
        <h3 className="mb-10">{title}</h3>
            {specs.map((spec, idx) => (
                <li key={idx}>{spec}</li>
            )
            )}
       
    </div>
  )
}

export default PrintSpecs