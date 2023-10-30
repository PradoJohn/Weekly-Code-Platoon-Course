// const sendARequest = () =>{
//   let request = ("app/students", {
//     'first_name': F
//   }
//   )
// };


const getStudents = async() =>{
  let response = await fetch("")
  let data = await response.json()

  let ul = document.getElementById("student-list")
  let li = document.createElement('li')

  
  li.innerText = 'Student Name: Andrew'
  ul.appendChild(li)

};

