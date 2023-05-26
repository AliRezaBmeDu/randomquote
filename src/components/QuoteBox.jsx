import React, {Fragment, useState} from 'react'
//import {Box, Button} from '@mui/material'
import quotes from './quoteDB.jsx'

const size = quotes.length - 1;
const randomNum = (count) => {
  let x = Math.floor(size*Math.random());
  console.log(quotes)
  if (x === count){
    return randomNum(x);
  }else{
    return x
  }
} 
const randomQuote = (count) => {
  return quotes[count]
}

export default function QuoteBox () {
  let [count, setCount] = useState(0);
  return (
    <Fragment className="container">
      <div style={{background:"lightblue", color:"black"}}>
        <h2 id="text" style= {{fontWeight: 'bold'}}>{randomQuote(count).quote}</h2>
        <h3 id="author" style= {{fontStyle: 'italic'}}>- {randomQuote(count).author}</h3>
        <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">tweet the quote</a>
      </div>
      <button id="new-quote" style={{background:"yellow"}} onClick={() => setCount(randomNum(count))} >
        Generate New Quote
      </button>
    </Fragment>
  );
}