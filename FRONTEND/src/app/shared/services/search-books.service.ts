import { Injectable } from '@angular/core';
import { BooksModel } from '../models/books.model';
import { GoogleBooksService } from './google-books.service';

@Injectable({
  providedIn: 'root'
})
export class SearchBooksService {



  constructor(private apiGoogle: GoogleBooksService) { }



  async searchBooks(search: string, quantity: number) {
    try {

      let books:BooksModel[] = await this.apiGoogle.getSearchBooks(search, quantity);

      for (let i = 0; i < books.length; i++) {
        if (books[i].description.length <= 0) {
          books[i].description = "Lo sentimos la descripción de este libro no está disponible.";
        }


        let title = books[i].title;

        if (title.length > 70) {

          books[i].title = `${title.substring(0, 70)}...`;

        }


        let width = window.innerWidth;
        if (width <= 530) {
          if (title.length > 30) {
            books[i].title = `${title.substring(0, 30)}...`;
          }
        }

      }


      return books;

    } catch (error) {

    }
  }


}
