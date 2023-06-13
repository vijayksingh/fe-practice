const promise = new Promise((resolve, reject) => {
  reject(new Error('Rejected Bitch'))
})

const resolved = Promise.resolve('Resolved with method')

const rejected = Promise.reject(new Error('Rejected with method'))

rejected.catch((e) => console.log(e.message))
promise.catch((e) => console.log(e.message))