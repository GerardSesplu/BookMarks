import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  cookieAcept(): boolean {
   try {
    if (localStorage.getItem('cookiesAcept')) {
      if (localStorage.getItem('cookiesAcept') === 'true') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
   } catch (error) {
     return false;
   }
  }

  setCookieAcept(text:string){
    localStorage.setItem('cookiesAcept', text)
  }










}
