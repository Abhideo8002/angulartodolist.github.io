import { Component, OnInit } from '@angular/core';
import{Firstproject} from "../../Firstproject";

@Component({
  selector: 'app-firstproject',
  templateUrl: './firstproject.component.html',
  styleUrls: ['./firstproject.component.css']
})
export class FirstprojectComponent implements OnInit {

  "firstproject": Firstproject[];

  constructor() { 
    this.firstproject =[
      {
         sno:1,
         title: "This is title",
         desc: "Description",
         active: true
      },
      {
        sno:2,
        title: "This is title 2",
        desc: "Description",
        active: true
     },
     {
      sno:3,
      title: "This is title 3",
      desc: "Description",
      active: true
   }
    ]
  }

  ngOnInit(): void {
  }
  deleteFirstproject(firstproject:Firstproject){
    console.log(firstproject);
    const index = this.firstproject.indexOf(firstproject);
    this.firstproject.splice(index, 1)

  }
  addFirstproject(firstproject:Firstproject){
    console.log(firstproject);
    
    this.firstproject.push(firstproject);

  }

}
