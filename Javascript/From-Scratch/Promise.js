class MyPromise {
  resolvedVal;
  rejectedVal;

  thenStore = [];
  catchStore = [];

  isResolved = false;
  isRejected = false;

  static all(promises) {
    const fulfilled = [];
    const results = [];

    return new MyPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((data) => {
            fulfilled.push(true);
            result[index] = data;

            if (promises.length === fulfilled.length) {
              resolve(results);
            }
          })
          .catch((error) => reject(error));
      });
    });
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(error) {
    return new MyPromise((reject) => reject(error));
  }

  constructor(executor) {
    // executor function is synchronouse and executes immediately

    // resolve
    const resolve = (val) => {
      this.resolvedVal = val;
      this.isResolved = true;

      if (this.thenStore.length)
        this.thenStore.reduce((acc, fn) => fn(acc), this.resolvedVal);
    };

    const reject = (val) => {
      this.isRejected = true;
      this.rejectedVal = val;

      if (this.catchStore.length) {
        this.catchStore.reduce((acc, fn) => fn(acc), this.rejectedVal);
      }
    };
    executor(resolve, reject);
  }

  then(fn) {
    this.thenStore.push(fn);
    if (this.isResolved) {
      this.thenStore.reduce((acc, fn) => fn(acc), this.resolvedVal);
    }

    return this;
  }

  catch(fn) {
    this.catchStore.push(fn);

    if (this.isRejected) {
      this.catchStore.reduce((acc, fn) => fn(acc), this.rejectedVal);
    }

    return this;
  }

  finally(fn) {
    this.thenStore.push(fn);
    this.catchStore.push(fn);

    if (this.isResolved) {
      this.thenStore.reduce((acc, fn) => fn(acc), this.resolvedVal);
    }

    if (this.isRejected) {
      this.catchStore.reduce((acc, fn) => fn(acc), this.rejectedVal);
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve(10);
    reject(4);
  }, 1000);
});

promise
  .then((data) => {
    return data * 2;
  })
  .then((data) => data * 4)
  .then(console.log)
  .catch((val) => val * 3)
  .catch((val) => val * 5)
  .catch(console.log);
