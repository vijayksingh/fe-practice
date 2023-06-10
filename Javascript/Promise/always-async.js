const promise = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE')
})

promise.then(console.log)

console.log('MAIN PROGRAM')

// JS will finish synchronous code first always and then it will pick async part