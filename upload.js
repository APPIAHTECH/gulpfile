export default class upload{

  constructor(name , date) {
    this.name = name;
    this.date = date;
  }

  setName (name) {this.name = name;}
  setDate (date) {this.date = date;}

  getName () {return this.name;}
  getDate () {return this.date;}

  uploadTo(){
    console.log("Im uploading the file");
  }
}
