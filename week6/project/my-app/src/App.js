import React, {useState} from "react"
import "./project.css"

function App() {

  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [add, setAdd] = useState("")
  const [sub, setSub] = useState("")
  const [mul, setMul] = useState("")
  const [div, setDiv] = useState("")
  
function addition() {
    setAdd(num1 + num2)
}
function subtraction() {
    setSub(num1 - num2)
}
function multiply(){
    setMul(num1 * num2)
}
function divide() {
    setDiv(num1 / num2)
}

  return (

    <div>
        <form className="form">
          <input 
            className="input"
            type="number"
            name="num1"
            value={num1}
            placeholder="enter a number"
            onChange={e => setNum1(+e.target.value)}
          ></input>

          <input 
            className="input"
            type="number"
            name="input2"
            value={num2}
            placeholder="enter a number"
            onChange={e => setNum2(+e.target.value)}

          ></input>

        </form>

              <div className="select">
              <button onClick={addition}>Add</button>
              <button onClick={subtraction}>Subtract</button>
              <button onClick={multiply}>Multiply</button>
              <button onClick={divide}>Divide</button>
              </div>

          <h1>{add}{sub}{mul}{div}</h1>
            
    </div>
  )

}
export default App
