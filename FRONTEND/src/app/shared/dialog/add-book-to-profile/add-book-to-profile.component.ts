import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book-to-profile',
  templateUrl: './add-book-to-profile.component.html',
  styleUrls: ['./add-book-to-profile.component.css']
})
export class AddBookToProfileComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddBookToProfileComponent>) {

  }

  ngOnInit(): void {

  }




}
