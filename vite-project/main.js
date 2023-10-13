class Advertisment {
  constructor() {
    this.location();
  }



  location() {
    navigator.geolocation.getCurrentPosition(this.myLocation, this.errorLocation);
  }


  myLocation(result){
    console.log(result);
  }

  errorLocation(error){
    console.log(error);
  }






}

let advertisment = new Advertisment();