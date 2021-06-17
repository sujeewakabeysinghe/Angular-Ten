import { Component, OnInit } from '@angular/core';
//import { Data } from './model.data' //we can create this separately also and import it to here.

interface Data{
  name : string,
  age : number,
  graduate : boolean
} //when we declare a object with this type its elements should be these types if not it will show an error.

@Component({
  selector: 'app-models-interfaces',
  templateUrl: './models-interfaces.component.html',
  styleUrls: ['./models-interfaces.component.css']
})
export class ModelsInterfacesComponent implements OnInit {

  myself : any

  constructor() { }

  ngOnInit(): void {
  }

  myData(){
    const me : Data = {
      name : 'Sujeewa',
      age : 26,
      graduate : true
    }
    return me;
  }
  showData(){
    this.myself = this.myData()
    console.log(this.myself)
  }

}
