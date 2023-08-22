const App = () => {

  return (
    
    <div>
      <Header course= "Half Stack Course" />
      <Content 
        part1 = 'Fundamentals of React' 
        part2 = 'Using props to pass data'
        part3 = 'State of a component' 
        exercise1 = {10} 
        exercise2 ={7} 
        exercise3 = {14} 
      />
      <Total
        exercise1 = {10}
        exercise2 = {7}
        exercise3 = {14}
      />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
    <h1>{props.course}</h1>
    
    </div>
  )   
}

const Content = (props) => {
  return(
    <div>
      <Part part = {props.part1} exercise = {props.exercise1}/>
      <Part part = {props.part2} exercise = {props.exercise2}/>
      <Part part = {props.part3}  exercise = {props.exercise3}/>
    </div>
  )
}

const Total = (props) => {
  return(
  <p>Number of exercises {props.exercise1+ props.exercise2 + props.exercise3}</p>
)}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercise}</p>
  )
}
export default App