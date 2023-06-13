const alwaysThrows = () => { throw new Error('OH NOES') }

const iterate = (num) => {
  console.log(num)
  return num + 1
}

Promise.resolve(iterate(10))
  .then(itemerate)
  .then(itemerate)
  .then(itemerate)
  .then(itemerate)
  .then(itemerate)
  .then(itemerate)
  .then(itemerate)
  .then(itemerate)
  .then(itemerate)
  .then(itemerate)
  .then(itemerate)
  .catch((e) => console.log(e.meesage))