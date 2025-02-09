// import React from 'react'
import './CountriesListShimmer.css'

export default function CountriesListShimmer() {

const mapped = Array.from({length:10}).map((el,index)=>{
    return <div key={index} className="country-card shimmer-card" ></div>
})

  return (
    <div className='countries-container'>
        {
            mapped
        }
    </div>
  )
}
