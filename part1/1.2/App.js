//Part 1.2

import React from "react"
import ReactDOM from "react-dom"

export const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React:",
        exercises: 10
      },
      {
        name: "Using props to pass data:",
        exercises: 7
      },
      {
        name: "State of a component:",
        exercises: 14
      }
    ]
  }

  const Header = () => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part eachpart={course.parts[0]} />
        <Part eachpart={course.parts[1]} />
        <Part eachpart={course.parts[2]} />
      </div>
    )
  }

  const Part = props => {
    const { eachpart } = props
    return (
      <div>
        <p>
          {eachpart.name} {eachpart.exercises}
        </p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>
          Number of exercises: {course.parts[0].exercises + 
          course.parts[1].exercises + 
          course.parts[2].exercises}
        </p>
      </div>
      )
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
