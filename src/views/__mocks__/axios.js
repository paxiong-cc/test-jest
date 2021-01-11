export default {
  get (url) {
    if (url === '/asd') {
      return new Promise((resolve, reject) => {
        resolve({ name: 1 })
      })
    }
  }
}
