
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Firstproject } from 'src/app/Firstproject';

@Component({
  selector: 'app-firstproject-item',
  templateUrl: './firstproject-item.component.html',
  styleUrls: ['./firstproject-item.component.css']
})
export class FirstprojectItemComponent implements OnInit {
  @Input() "firstproject": Firstproject;
  @Output() firstprojectDelete: EventEmitter<Firstproject>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(firstproject: Firstproject){
    this.firstprojectDelete.emit(firstproject);
    console.log("onClick has been triggered")
  }

}
