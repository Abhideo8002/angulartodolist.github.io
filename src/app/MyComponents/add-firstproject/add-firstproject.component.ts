import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import { Firstproject } from 'src/app/Firstproject';

@Component({
  selector: 'app-add-firstproject',
  templateUrl: './add-firstproject.component.html',
  styleUrls: ['./add-firstproject.component.css']
})
export class AddFirstprojectComponent implements OnInit {
  'title':string;
  'desc':string;
  @Output() firstprojectAdd: EventEmitter<Firstproject>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const firstproject = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
   this.firstprojectAdd.emit(firstproject);
  }

}
