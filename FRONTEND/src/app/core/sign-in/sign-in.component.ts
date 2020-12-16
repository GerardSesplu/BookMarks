import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorSignInComponent } from 'src/app/shared/dialog/error-sign-in/error-sign-in.component';
import { LoginService } from 'src/app/shared/services/login.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formg: FormGroup;
  reponsive: boolean = false;
  appearance: String = 'outline';
  hidePass: boolean = true;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private login:LoginService) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  icono = setInterval(() => {
    //reponsive----
    let width = window.innerWidth;
    if (width > 500) {
      this.appearance = 'outline';
      this.reponsive = false;
    } else {
      this.appearance = 'legacy';
      this.reponsive = true;
    }

  }, 300);

  createForm() {
    this.formg = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      genre: ['Male', [Validators.required]],
      birthdate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$")]],
      password: ['', [Validators.required, Validators.pattern("(?=\\w*[0-9])(?=\\w*[A-Z])(?=\\w*[a-z])\\S{4,30}$")]]
    });
  }

  


  saveForm() {

    if (this.formg.status === 'VALID') {

      let formSign: FormSign = {
        name: this.formg.get('name').value,
        lastname: this.formg.get('lastname').value,
        phone: this.formg.get('phone').value,
        genre: this.formg.get('genre').value,
        birthdate: (this.formg.get('birthdate').value).toString(),
        email: this.formg.get('email').value,
        password: this.formg.get('password').value,
      }

      this.login.setSignIn(formSign);
      this.sendUser();
    
    } else {

      this.snackBar.openFromComponent(ErrorSignInComponent, {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });

    }

  }

  sendUser(){
    const sendData = () => {
      return new Promise((resolve, reject) => {
        let userRequest = new XMLHttpRequest();
        userRequest.open('POST',' http://localhost:3000/users')
        userRequest.setRequestHeader('Content-Type', 'application/json')
        const dataToSend = { 
          firstname: this.formg.value.name,
          lastname: this.formg.value.lastname,
          phone: this.formg.value.phone,
          genre: this.formg.value.genre,
          birthdate: this.formg.value.birthdate,
          email: this.formg.value.email,
          password:this.formg.value.password
        };
        userRequest.send(JSON.stringify(dataToSend));
      });
    }

    sendData()
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }


  get invaName() { return this.formg.get('name').status === 'INVALID' && this.formg.get('name').touched; }
  get invaLastname() { return this.formg.get('lastname').status === 'INVALID' && this.formg.get('lastname').touched; }
  get invabirthdate() { return this.formg.get('birthdate').status === 'INVALID' && this.formg.get('birthdate').touched; }
  get invaEmail() { return this.formg.get('email').status === 'INVALID' && this.formg.get('email').touched; }
  get invaPassword() { return this.formg.get('password').status === 'INVALID' && this.formg.get('password').touched; }
  get invaPhone() { return this.formg.get('phone').status === 'INVALID' && this.formg.get('phone').touched; }


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