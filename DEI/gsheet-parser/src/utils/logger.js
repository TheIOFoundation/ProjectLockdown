// TODO: detect environment and set logging appropriately
class logger {
  static log(string) {
    console.log(string);
  }

  static error(exception) {
    console.dir(exception);
  }
}

export default logger;