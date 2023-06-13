

const generatateKey = (args) => {
  // Key generation implementation    
}

const memoize = () => {
  const cache = {};

  return (fn, args = []) => {
    const key = generateKey(args);

    if (key && !cache.hasOwnProperty(key)) {
      cache[key] = fn.apply(null, args);
    }

    return cache[key];
  }

}