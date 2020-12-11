import React, {useState} from "react"
import axios from "axios"
import "./capstone.css"

function App() {

  const root = document.getElementById("root")
  
  const [tweet, setTweet] = useState("")
  const [name, setName] = useState("")
  const [edit, setEdit] = useState("")

  const handleTweetChange = (e) => setTweet(e.target.value)
  const handleNameChange = (e) => setName(e.target.value)

function sendEdit() {
  const h1update = document.createElement("h1")
  h1update.textContent = edit 
  root.appendChild(h1update)
}

function sendTweet() {

    const h1 = document.createElement("h1")
    h1.textContent = tweet + " , " + name 
    root.appendChild(h1)
  
    const deleteBtn = document.createElement("BUTTON")
    deleteBtn.textContent = "delete post"
    deleteBtn.setAttribute("id", "done")
    h1.appendChild(deleteBtn)

    deleteBtn.onclick = function() {h1.style.display = "none"}

    const editBtn = document.createElement("BUTTON")
    editBtn.textContent = "edit your post"
    h1.appendChild(editBtn)
    editBtn.onclick = function openEdit() {

      const editInput = document.createElement("input")
      editInput.type= "text"
      editInput.textContent = (e) => setEdit(e.target.value)
      h1.appendChild(editInput)
      
      const submitEdit = document.createElement("button")
      submitEdit.textContent = "submit your edit"
      h1.appendChild(submitEdit)
      submitEdit.onClick={sendEdit}
  }

}
  
function getData() {
  axios.get("https://api.vschool.io/karatemple2/todo")

  .then(response => createTweets(response.data))
  .catch(error => console.log(error))
}

function createTweets(data) {

  for(let i = 0; i < data.length; i++) {
          const h1tweet = document.createElement("h1")
          h1tweet.textContent = data[i].title
          root.appendChild(h1tweet)
          if(data[i].completed) { h1tweet.style.display = "none" }

          const deleteBtn = document.createElement("BUTTON")
          deleteBtn.textContent = "delete post"
          h1tweet.appendChild(deleteBtn)

          deleteBtn.onclick = function() {
          axios.delete("https://api.vschool.io/karatemple2/todo/" + data[i]._id, {"completed": !data[i].completed})

            .then(response => { getData()})
            .catch(error => console.log(error))
        }

          const editBtn = document.createElement("BUTTON")
          editBtn.textContent = "edit post"
          h1tweet.appendChild(editBtn)

  }
}

  return (

    <div>
        <form className="form">
            <input 
              className="input"
              type="text"
              name="tweet"
              value={tweet}
              placeholder="Type your tweet here"
              onChange={handleTweetChange}
            >
            </input>

            <input 
              className="name"
              type="text"
              name="name"
              value={name}
              placeholder="Add your name here"
              onChange={handleNameChange}
            >
            </input>

        </form>
        <button className="post" onClick={sendTweet}>Post your tweet!</button>
        

    </div>
  )
  }
export default App
