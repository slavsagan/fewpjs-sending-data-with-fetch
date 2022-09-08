// Add your code here

// let submitData = {
//   name: "Slav",
//   email: "student@gmail.com"
// };

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(submitData)
// };

// fetch("http://localhost:3000/users", configObj)
// .then(function(response) {       /** handling request */
// return response.json()         /** recieve data we sent from the server */
// })
// .then(function(object) {         /** retrive this data */
// console.log(object);
// })
// .catch(function(error) {        /** catching erros */
// alert("Bad things, Slav!");
// console.log(error.message);
// });


function submitData(name, email) {

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: 'Steve',
      email: 'steve@steve.com',
    }),
  })

    .then(function (response) {
      return response.json()
    })
    .then(function (object) {
      getId(object)
    })
    .catch(function (error) {
      alert('Bad things, Slav!')
      console.log(error.message)
    })
}
