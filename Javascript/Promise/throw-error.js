/*
## Task

Let's build exactly the system discussed above.

Some invalid JSON will be available on process.argv[2].

  * Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block, and fulfills or rejectsthe promise depending on whether an error is thrown.**Note:** your function should synchronously return the promise!
  * Build a sequence of steps like the ones shown above that catchesany thrown errors and logs them to the console.
*/

const invalidJSON = process.argv[2];

const parsePromised = (json) => {
  return new Promise((resolve, reject) => {
    try {
      const parsedJSON = JSON.parse(json)
      resolve(parsedJSON)
    } catch (e) {
      reject(e)
    }
  })
}

parsePromised(invalidJSON).catch((e) => console.log(e.message))