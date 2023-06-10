const attachTitle = (val) => `DR. ${val}`;

const promise = Promise.resolve("MANHATTAN")
  .then(attachTitle)
  .then(console.log);
