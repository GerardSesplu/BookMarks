import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddBookToProfileComponent } from 'src/app/shared/dialog/add-book-to-profile/add-book-to-profile.component';
import { BookModel } from 'src/app/shared/models/book.model';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { GoogleBooksService } from 'src/app/shared/services/google-books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  book: BookModel;
  bookIsLoad: boolean = false;
  reponsiveBool = false;
  userId = localStorage.getItem('userId');

  constructor(private apiService: GoogleBooksService, private route: ActivatedRoute, public dialog: MatDialog, private db: DatabaseService) { }

  ngOnInit(): void {
    this.load();

  }

  isReponsive = setInterval(() => {
    //reponsive----
    let width = window.innerWidth;
    if (width > 800) {
      this.reponsiveBool = false;
    } else {
      this.reponsiveBool = true;
    }

  }, 300);

  async load() {

    try {

      this.book = new BookModel();

      let id: string = '';
      this.route.params.subscribe((params) => {
        id = params['id'];
      });

      this.book = await this.apiService.getBook(id);



      this.book.description = this.book.description.replace(/<[^>]*>?/g, '');




      this.bookIsLoad = true;

    } catch (error) {

    }


  }


  saveInProfileFav() {
    const dialogRef = this.dialog.open(AddBookToProfileComponent);
    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {
        console.log(this.book.title, this.book.authors, this.book.id, this.userId, this.userId);
        
        let bookInfo = {
          title: this.book.title,
          author: this.book.authors[0],
          apiId: this.book.id,
          userId: this.userId
        }
        this.db.addBookFav(bookInfo);
      } else {

      }
    });
  }
  saveInProfileToRead() {
    const dialogRef = this.dialog.open(AddBookToProfileComponent);
    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {
        console.log(this.book.title, this.book.authors, this.book.id, this.userId);
        
        let bookInfo = {
          title: this.book.title,
          author: this.book.authors[0],
          apiId: this.book.id,
          userId: this.userId
        }
        this.db.addBookToRead(bookInfo);
      } else {

      }
    });
  }
  saveInProfileReaded() {
    const dialogRef = this.dialog.open(AddBookToProfileComponent);
    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {
        console.log(this.book.title, this.book.authors, this.book.id, this.userId);
        
        let bookInfo = {
          title: this.book.title,
          author: this.book.authors[0],
          apiId: this.book.id,
          userId: this.userId
        }
        this.db.addBookReaded(bookInfo);
      } else {

      }
    });
  }






}
