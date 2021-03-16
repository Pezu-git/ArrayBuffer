// import  getBuffer  from './app.js'

export default class ArrayBufferConverter {
  // eslint-disable-next-line class-methods-use-this
  load(buffer) {
    return this.tostring(buffer);
  }

  // eslint-disable-next-line class-methods-use-this
  tostring(buffer) {
    return String.fromCharCode.apply(null, new Uint16Array(buffer));
  }
}
