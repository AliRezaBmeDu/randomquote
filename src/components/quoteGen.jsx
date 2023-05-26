import React from 'react'
import quotes from './quoteDB.jsx'

const size = quotes.length - 1
const randomNum = Math.floor(size*Math.random())

const quoteGen = () => {
  return (
    <div>
        {quotes[randomNum]}
    </div>
    
  )
}

export default quoteGen