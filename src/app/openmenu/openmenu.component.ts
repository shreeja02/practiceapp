import { Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-openmenu',
  templateUrl: './openmenu.component.html',
  styleUrls: ['./openmenu.component.css']
})
export class OpenmenuComponent implements OnInit {

  public Editor=ClassicEditor;
  private data:string;

public select1:string="select your option";
  label:string="";
  selectedItem:string="";
  starFlag:boolean=false;
  textFlag:boolean=false;
  itemOption:string[]=[
    'text',
    'star rating',
    'slider',
    'Multiple choices',
    'Yes/no fields',
    'dropdown',
    'time field'
  ];
  animal: string;
  name: string;
  ngOnInit(){}

  public onChange( event ) {
     this.data=event.editor.getData();
}

onSave(){
  this.data=this.data.replace(/\&nbsp;/g,'');
  this.data=this.data.substring(3,this.data.length-4);
  console.log('final'+this.data);
  this.label=this.data;
  document.getElementById('myModal').click();
}
getSelectedItem(item){
  this.selectedItem=item;
  if(item=='star rating'){
    this.starFlag=true;
    this.textFlag=false;
  }
  else if(item=='text'){
    this.starFlag=false;
    this.textFlag=true;
  }
}
constructor(){}



}


