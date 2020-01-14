const fs = require('fs')


const readDir = (path = '/') => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, result) => {
            if (err) {
              throw new Error(err.message)
            }
            //console.log(result)
            resolve(result)
          })
    })
}

readDir()
.then(res => {
    console.log(res)

})