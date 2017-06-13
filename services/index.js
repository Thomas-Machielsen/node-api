module.exports = new class IndexService {

  // This service will get data from an external api
  getIndex() {
    return new Promise((resolve) => {
      setTimeout(function(){
        resolve("Success!");
      }, 250);
    });
  }

}();