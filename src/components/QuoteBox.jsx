import React, {useState} from 'react'
//import {Box, Button} from '@mui/material'
import quotes from './quoteDB.jsx'

const size = quotes.length - 1;
const randomNum = (count) => {
  let x = Math.floor(size*Math.random());
  console.log(quotes)
  if (x === count){
    return x+1;
  }else{
    return x
  }
} 
const randomQuote = (count) => {
  return quotes[count]
}

function QuoteBox () {
  let [count, setCount] = useState(0);
  return (
    <div>
      <div style={{background:"lightblue", color:"black", }}>
        <p style= {{fontWeight: 'bold'}}>{randomQuote(count).quote}</p>
        <p style= {{fontStyle: 'italic'}}>- {randomQuote(count).author}</p>
      </div>
      <button onClick={() => setCount(randomNum(count))} >
        Generate
      </button>
    </div>
  )
}

export default QuoteBox