import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';  //to check service

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  //name = 'Sujeewa abeYsinghe'
  name = '' //to check sesrvice
  date = Date.now()
  currency = 100

  constructor( private myService : MyServiceService ) {
    console.log(myService.myData().name)
    let data = myService.myData().name
    this.name = data
  }

  ngOnInit(): void {
  }

}
