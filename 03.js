for (let i = 1; i <= 3; i++) {
    setTimeout( async () => {
        const result = new Promise((resolve, reject) => {
            resolve(i)
        })
       console.log( await result)
    }, 1000);
  }
  
  console.log('Done')