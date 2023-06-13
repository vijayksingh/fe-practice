setTimeout(() => {
  console.log('TIMED OUT!')
}, 300)

// It won't invoke immediately
// It will invoke after 300ms, and thus it's asynchronous function

// JS is single-threaded, it's always synchronous
// We get asynchronous behavior by browswer's API

// JS runs inside browswer's engine