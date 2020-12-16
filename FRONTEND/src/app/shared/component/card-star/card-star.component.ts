import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-star',
  templateUrl: './card-star.component.html',
  styleUrls: ['./card-star.component.css']
})
export class CardStarComponent implements OnInit {

  @Input() rate:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  defaul():boolean{

    if (this.rate=="0") {
      return true;
    } else if(this.rate==""){
      return true;
    }else if(this.rate==null){
      return true;
    }else{
      return false;
    }
  }
}
