const axios = require('axios');

let Users = []
let Posts = []

const post = async () =>  await axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res => {
    Posts.push(res.data)
})

const user = async () =>  await axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
    Users.push(res.data)
})


const getPost = () => {
    post();
    user()
    console.log(Users)
    console.log(Posts);
    //console.log(Posts)
    
}

getPost();