import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { Savechanges } from "./../../shared/component/card-profile/card-profile.component";
import { Form } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public firstName: string = 'Admin';
  public lastName: string = 'Adminstation';
  public phoneNumber: string = '673947839';
  public birthDate: string = '1998-07-14';
  public email: string = 'admin@bookmarks';
  public password: string = 'adminsitration123AA';

  namePattern = "^[a-z0-9_-]{8,15}$";
  phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";
  birthPattern = "[{0,9}]";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";

  constructor(private db:DatabaseService) { }

  
  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    this.db.getFavBooks(userId);
    this.db.getToReadBooks(userId);
    this.db.getReadedBooks(userId);
  }



  
  saveChanges(changes: Savechanges): void {
    this.db.addChangeProfile(changes);
  }
}
