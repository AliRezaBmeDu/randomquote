import './App.css';
import QuoteBox from './components/QuoteBox.jsx'


function App() {
  return (
    <div className="App">
      <div className="heading" style={{background: "green", color:"white", position: "center"}}>
        <h1>Random Quote</h1>
      </div>
      <div>
        <QuoteBox id ="quote-box"/>
      </div>
    </div>
  )
}

export default App;
