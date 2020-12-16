import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { BooksModel } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  constructor(private https: HttpClient) { }

  callApi(url: string) {

    return new Promise((resolve, reject) => {

      this.https.get(url).subscribe((data: any) => {
        console.log(data);
        console.log('service active');
        
        resolve(data);
      }, (error) => {
        reject(error);
      });
      
    });
  }

  async getSearchBooks(text: string = "", quantity: number = 40) {

    try {

      let url = `https://www.googleapis.com/books/v1/volumes?q={${text}}&maxResults=${quantity}&printType=BOOKS&projection=FULL`;
      let data: any = await this.callApi(url);
      let books: BooksModel[] = [];

      for (let i = 0; i < data.items.length; i++) {
        const item = data.items[i];

        let book: BooksModel = new BooksModel();


        if (item.id) {
          book.id = item.id;
        } else { book.id = ""; }

        if (item.volumeInfo.title) {
          book.title = item.volumeInfo.title;
        } else { book.title = "" }

        if (item.volumeInfo.publishedDate) {
          book.publishedDate = item.volumeInfo.publishedDate;
        } else { book.publishedDate = "" }

        if (item.volumeInfo.imageLinks) {
          book.imageLinks = item.volumeInfo.imageLinks;
        } else { book.imageLinks = { smallThumbnail: "assets/images/sad-cat.png", thumbnail: "assets/images/sad-cat.png" }; }


        if (item.volumeInfo.description) {
          book.description = item.volumeInfo.description;
        } else { book.description = "" }

        if (item.volumeInfo.categories) {
          book.categories = item.volumeInfo.categories;
        } else { book.authors = [] }


        if (item.volumeInfo.authors) {
          book.authors = item.volumeInfo.authors;
        } else { book.authors = [] }
        if (item.volumeInfo.authors) {
          let textt: string = "";
          for (let i = 0; i < item.volumeInfo.authors.length; i++) {
            const element = item.volumeInfo.authors[i];

            if (i >= item.volumeInfo.authors.length-1 ) {
              textt += element;
            } else {
              textt += element+", ";
            }
            
          }

          book.authorss = textt;
        } else { book.authorss = "" }

        if (item.volumeInfo.averageRating) {
          book.averageRating = item.volumeInfo.averageRating;
        } else { book.averageRating = "" }


        books.push(book);
      }
      return books;

    } catch (error) {
      console.log(error);
    }
  }









  async getBook(id: string = "") {

    try {
      let url = `https://www.googleapis.com/books/v1/volumes/${id}?projection=FULL`;
      let item: any = await this.callApi(url);
      let book: BookModel = new BookModel();

      if (item.id) {
        book.id = item.id;
      } else { book.id = ""; }

      if (item.volumeInfo.title) {
        book.title = item.volumeInfo.title;
      } else { book.title = "" }

      if (item.volumeInfo.subtitle) {
        book.subtitle = item.volumeInfo.subtitle;
      } else { book.subtitle = "" }

      if (item.volumeInfo.publishedDate) {
        book.publishedDate = item.volumeInfo.publishedDate;
      } else { book.publishedDate = "" }

      if (item.volumeInfo.description) {
        book.description = item.volumeInfo.description;
      } else { book.description = "" }

      if (item.volumeInfo.authors) {
        book.authors = item.volumeInfo.authors;
      } else { book.authors = [""] }


      if (item.volumeInfo.averageRating) {
        book.averageRating = item.volumeInfo.averageRating;
      } else { book.averageRating = "" }

      if (item.volumeInfo.ratingsCount) {
        book.ratingsCount = item.volumeInfo.ratingsCount;
      } else { book.ratingsCount = "" }

      if (item.volumeInfo.imageLinks) {
        book.imageLinks = item.volumeInfo.imageLinks;
      } else { book.imageLinks = { large: "assets/images/sad-cat.png", medium: "assets/images/sad-cat.png", small: "assets/images/sad-cat.png" } }

      if (item.volumeInfo.publisher) {
        book.publisher = item.volumeInfo.publisher;
      } else { book.publisher = "" }

      if (item.volumeInfo.printedPageCount) {
        book.printedPageCount = item.volumeInfo.printedPageCount;
      } else { book.printedPageCount = "" }

      if (item.volumeInfo.pageCount) {
        book.pageCount = item.volumeInfo.pageCount;
      } else { book.pageCount = "" }

      if (item.volumeInfo.language) {
        book.language = item.volumeInfo.language;
      } else { book.language = "" }


      if (item.volumeInfo.industryIdentifiers) {
        book.industryIdentifiers = item.volumeInfo.industryIdentifiers;
      } else { book.industryIdentifiers = [] }

      if (item.volumeInfo.dimensions) {
        book.dimensions = item.volumeInfo.dimensions;
      } else { book.dimensions = { height: "" } }

      if (item.volumeInfo.categories) {
        book.categories = item.volumeInfo.categories;
      } else { book.categories = [] }

      return book;

    } catch (error) {

    }

  }

}
