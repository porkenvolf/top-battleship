/* https://gist.github.com/learncodeacademy/777349747d8382bfb722 */
const Pubsub = {
  Pubsub: {},
  on(eventName, fn) {
    this.Pubsub[eventName] = this.Pubsub[eventName] || [];
    this.Pubsub[eventName].push(fn);
  },
  off(eventName, fn) {
    if (this.Pubsub[eventName]) {
      for (let i = 0; i < this.Pubsub[eventName].length; i++) {
        if (this.Pubsub[eventName][i] === fn) {
          this.Pubsub[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  emit(eventName, data) {
    if (this.Pubsub[eventName]) {
      this.Pubsub[eventName].forEach((fn) => {
        fn(data);
      });
    }
  },
};

export default Pubsub;
