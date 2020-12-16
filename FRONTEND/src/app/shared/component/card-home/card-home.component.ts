import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

 

  @Input() title: string = "";
  @Input() publishedDate: string = "";
  @Input() imageLinks: string = "";
  @Input() description: string = "";
  @Input() authors: string[] = [];
  @Input() averageRating: string = "";
  @Input() idInput: string = "";
 
  @Output() id = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  setId(id:string){
    this.id.emit(id);
  }



}
