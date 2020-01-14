const axios = require('axios');

const getUser = () => {
    return new Promise()
}

(async function() {
    const post = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const user = await axios.get('https://jsonplaceholder.typicode.com/users');

    const resultPost = post.data;
    const resultUser = user.data;

    const result = resultPost.map(post => {
        return {
            ...post,
            user: resultUser.find(user => user.id == post.userId)
        }
    })
    console.log(result)
})();