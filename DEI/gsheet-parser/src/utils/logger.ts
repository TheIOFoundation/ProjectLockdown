// TODO: detect environment and set logging appropriately
class logger {
    static log(text: string) {
      console.log(text);
    }

    static debug(text: string) {
      console.log(text);
    }
  
    static error(exception: string) {
      console.dir(exception);
    }
  }
  
  export default logger;