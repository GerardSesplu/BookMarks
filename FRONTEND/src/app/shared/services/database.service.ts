import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { Savechanges } from "./../../shared/component/card-profile/card-profile.component";
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private https: HttpClient) { }



  addBookFav(bookInfo){

    return new Promise((resolve, reject) => {

      this.https.post('http://localhost:3000/books/favourites',bookInfo).subscribe((data: any) => {
        console.log('service active');
        
        resolve(data);
      }, (error) => {
        reject(error);
      });
      
    });
  }

  addBookToRead(bookInfo){

    return new Promise((resolve, reject) => {
      this.https.post('http://localhost:3000/books/toread', bookInfo).subscribe((data: any) => {
        console.log('service active');
        console.log(bookInfo);

        resolve(data);
      }, (error) => {
        reject(error);
      });
      
    });
  }

  addBookReaded(bookInfo){

    return new Promise((resolve, reject) => {
      this.https.post('http://localhost:3000/books/readed', bookInfo).subscribe((data: any) => {
        console.log('service active');
        console.log(bookInfo);

        resolve(data);
      }, (error) => {
        reject(error);
      });
      
    });
  }
     
  

  addChangeProfile(change:Savechanges){


  }

  

  getFavBooks(id){
    return new Promise((resolve, reject) => {

      this.https.get(`http://localhost:3000/books/favourites/${id}`).subscribe((data: any) => {
        console.log('service active favourites');
        console.log(data);
        
        resolve(data);
      }, (error) => {
        reject(error);
      });
      
    });

  }

  getToReadBooks(id){
    return new Promise((resolve, reject) => {

      this.https.get(`http://localhost:3000/books/toread/${id}`).subscribe((data: any) => {
        console.log('service active to read');
        console.log(data);
        
        resolve(data);
      }, (error) => {
        reject(error);
      });
      
    });

  }

  getReadedBooks(id){
    return new Promise((resolve, reject) => {

      this.https.get(`http://localhost:3000/books/readed/${id}`).subscribe((data: any) => {
        console.log('service active readed');
        console.log(data);
        
        resolve(data);
      }, (error) => {
        reject(error);
      });
      
    });

  }
  

}
