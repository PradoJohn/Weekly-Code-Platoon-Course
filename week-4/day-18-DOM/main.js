const showName = () =>{
  let nameInput = document.getElementById("input-name").value 
  let output = document.getElementById("output")
  output.innerText = `Hello ${nameInput}`
}