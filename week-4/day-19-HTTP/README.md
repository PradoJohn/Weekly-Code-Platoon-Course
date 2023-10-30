HTTP REQUESTS

GET - Covered
POST -
  Request method
  function(){
    let request = (method = 'POST', endpoint = 'app/students/' dict_data = {})
  }

PUT
DELETE


fetch("host/endpoint)
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data)
  })


const getStudents = async () => {
  let response = await fetch("host/endpoint")
  let data = await response.json()
  console.log(data)

}


pip install flask-cors

<!-- python file -->
from flask-cors import CORS
CORS(app)