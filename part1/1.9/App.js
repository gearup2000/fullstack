//1.9

import { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => { 

      if (props.all === 0) {

        return (
          <div>
            
            <h2>No feedback given</h2>
            
          </div>
          )
      }
    
  return (

          <div>
         
            <h4>good: {props.good}</h4>
            <h4>neutral: {props.neutral}</h4>
            <h4>bad: {props.bad}</h4>
            <h4>all: {props.all}</h4>
            <h4>average: {props.average}</h4>
            <h4>positive: {props.positive +' %'}</h4>
    
          </div>

          )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h2>give feedback</h2>
      
        <button onClick = {() => setGood(good + 1)}>good</button>
        <button onClick = {() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick = {() => setBad(bad + 1)}>bad</button>
        <br />
      
      <h3>Statistics</h3>
          <h5>
            <Statistics

              good={good}
              neutral={neutral}
              bad={bad}
              all={good + neutral + bad}
              average= {(good - bad) / (good + neutral + bad)}
              positive= {(100 * good ) / (good + neutral + bad)} 

             />

          </h5>

      </div>
  )
}

export default App
