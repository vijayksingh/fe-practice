const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("REJECTED!")) 
  }, 300)
})

function onReject(error) {
  console.log('REJECTED!')
}

promise.then(() => {}, onReject)