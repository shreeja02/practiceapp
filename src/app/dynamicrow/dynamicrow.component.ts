import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicrow',
  templateUrl: './dynamicrow.component.html',
  styleUrls: ['./dynamicrow.component.css']
})
export class DynamicrowComponent implements OnInit {
  flag:boolean=false;
name:string[]=[
  'xyz',
  'abc'
];
  constructor() { }

  ngOnInit() {
  }
  onAdd(){
    this.flag=true;
  }
  addRecord(a,b){
    this.name.push(a);
    this.name.push(b);
    this.flag=false;
  }

}
