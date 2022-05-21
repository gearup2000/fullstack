//Part 1.4

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const newContent = props.parts.map(function (item) {
    return (
      <div>
        <p> {item.name} {item.exercises}</p>
      </div>
    )
  })
  
  return newContent
}

const Total = (props) => {
  let all = 0
    const newContent = props.parts.map(function (item) 
      {all = all + item.exercises})
  
  return (
    <div>
      <p>Number of exercises {all} </p>
    </div>
  )
}

export default App
