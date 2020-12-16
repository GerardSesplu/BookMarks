import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {

  @Input() favoriteBool: boolean = false;
  @Input() pendingBool: boolean = false;
  @Input() readBool: boolean = false;
  @Output() changes = new EventEmitter<Savechanges>();

  constructor() { }

  ngOnInit(): void {
  }


  saveChanges(key: string, value: boolean) {

    let change: Savechanges = {
      key: key,
      value: value
    }
    this.changes.emit(change);


  }

}
export interface Savechanges {
  key: string,
  value: boolean
}