import './App.css';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase , ref , push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://endorsements-7f0e3-default-rtdb.asia-southeast1.firebasedatabase.app"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const comments = ref(database, "comment")

const addBtn = document.getElementById("add-Btn")
const endorserComment = document.getElementById("endorsement-comment")
const commentlieshere = document.getElementById("comment-lies-here")


addBtn.addEventListener("click" , function(){
  let textareaValue = endorserComment.value
  
  clearTextField()
  
  push(comments , textareaValue)

  addCommentToTheList(textareaValue)

})

function clearTextField() {
  endorserComment.innerHTML = ''
}

function addCommentToTheList(comment){
  commentlieshere.innerHTML += `<li>${comment}</li>`
}

function App() {
  return (
    console.log("hello")
  );
}

export default App;
