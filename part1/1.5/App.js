//Part 1.5

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
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
  const newContent = props.course.parts.map(function (item) {
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
    const newContent = props.course.parts.map(function (item) 
      {all = all + item.exercises})
  
  return (
    <div>
      <p>Number of exercises {all} </p>
    </div>
  )
}

export default App