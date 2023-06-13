const memoizeAsync = () => {
  const cache = new Map();
  const inProgressQueue = new Map()

  return (config, cb) => {
    const { url, key, duration } = config;

    if (cache.has(key)) {
      return cb(cache[key].data);
    }

    if(inProgressQueue.has(key)) {
      inProgressQueue.set(key, [cb])
    } else {
      inProgressQueue.get(key).push(cb)
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        cache[key] = { data, duration };

        for (let callback of inProgressQueue.get(key)) {
          callback(data);
        }

        setTimeout(() => {
          cache.delete(key)
          inProgressQueue.delete(key)
        }, duration)

        // Clean the inprogress Queue
        inProgressQueue.delete(key)
      });
  };
};
