//1.8

import { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  
  return (

          <div>
            good: {props.good}
            neutral: {props.neutral}
            bad: {props.bad}
            all: {props.all}
            average: {props.average}
            positive: {props.positive}
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
        good: {good}
         <br />
        neutral: {neutral}
         <br />
        bad: {bad}
         <br />
        all: {good + neutral + bad}
         <br />
        average: {(good - bad) / (good + neutral + bad)}
         <br />
        positive: {(100 * good ) / (good + neutral + bad)} %
         <br />
      </h5>

    </div>
  )
}

export default App
