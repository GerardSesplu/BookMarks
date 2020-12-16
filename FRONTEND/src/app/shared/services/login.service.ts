import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private https: HttpClient) { }

    setLogin(email: string) {

      return new Promise((resolve, reject) => {

        this.https.get(`http://localhost:3000/users/${email}`).subscribe((data: any) => {
          console.log('service active');
          
          resolve(data);
        }, (error) => {
          reject(error);
        });
        
      });

    }

    setSignIn(_formSign:FormSign){

    }
  

}

interface FormSign {
  name: string,
  lastname: string,
  phone: string,
  genre: string,
  birthdate: string,
  email: string,
  password: string
}