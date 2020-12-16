import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  reponsive: boolean = false;
  panelOpenState: boolean = false;

  constructor() {

  }

  //--reponsive----
  isReponsive = setInterval(() => {
    let width: number = window.innerWidth;
    if (width > 500) {
      this.reponsive = false;
    } else {
      this.reponsive = true;
    }

  }, 300);

  ngOnInit(): void {
  }


  openRouter(){

    this.panelOpenState = !this.panelOpenState;

    if (this.panelOpenState) {
      let main:HTMLElement = document.getElementsByClassName('main')[0] as HTMLElement;
      main.classList.add('heightGrid');
      
    } else {
      let main:HTMLElement = document.getElementsByClassName('main')[0] as HTMLElement;
      main.classList.remove('heightGrid');
    }
  }


}
