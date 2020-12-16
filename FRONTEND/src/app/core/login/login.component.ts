import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { strict } from 'assert';
import { CookieService } from 'ngx-cookie-service';
import { ErrorLoginComponent } from 'src/app/shared/dialog/error-login/error-login.component';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formg: FormGroup;
  hide: boolean = true;
  appearance: string = 'outline';
  reponsiveBool: boolean = false;
  attempts: number = 5;
  blockForm: boolean = false;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private loginService: LoginService, private cookieService: CookieService) {
    this.createForm();



  }

  private cookieValue: string;

  ngOnInit(): void {

    //reponsive----
    let width = window.innerWidth;
    if (width > 540) {
      this.appearance = 'outline';
      this.reponsiveBool = false;
    } else {
      this.appearance = 'legacy';
      this.reponsiveBool = true;
    }
  }

  openDialog() {

    let time: number = new Date().getTime();
    if (localStorage.getItem('blockLogin') === 'true') {
      if (Number(localStorage.getItem('blockLoginTime')) < time) {
        localStorage.setItem('blockLogin', 'false');
        localStorage.setItem('blockLoginTime', `0`);
        this.blockForm = false;
        this.attempts = 5;
      } else {
        this.blockForm = true;
      }

    } else {
      this.blockForm = false;
    }

    const dialogRef = this.dialog.open(ErrorLoginComponent, { data: { attempts: this.attempts, blockForm: this.blockForm } });

    if (this.attempts <= 0) {

      if (!this.blockForm) {
        this.blockForm = true;
        localStorage.setItem('blockLogin', 'true');
        localStorage.setItem('blockLoginTime', `${time + 900000}`);
      }

    } else {
      this.attempts--;
      this.blockForm = false;
    }

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  createForm() {

    this.formg = this.fb.group({

      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$")]],
      password: ['', [Validators.required, Validators.pattern("(?=\\w*[0-9])(?=\\w*[A-Z])(?=\\w*[a-z])\\S{4,30}$")]],
      remember: ['true', []]

    });
  }


  async saveForm() {


    if (this.formg.status === "VALID") {
      if (!this.blockForm) {

        let ema: string = this.formg.get('email').value;
        let pass: string = this.formg.get('password').value;
        let user = await this.loginService.setLogin(ema);

        if(user[0].password === pass){
          alert('usuario correcto')
          localStorage.setItem('userId', user[0].id);
        } else {
          alert('usuario incorrecto')
          this.openDialog()
        }
      }
    } else {
      this.openDialog();
    }


  }


  reponsive = setInterval(() => {
    let width = window.innerWidth;
    if (width > 540) {
      this.appearance = 'outline';
      this.reponsiveBool = false;
    } else {
      this.appearance = 'legacy';
      this.reponsiveBool = true;
    }

  }, 500);


  get invaEmail() { return this.formg.get('email').status === 'INVALID' && this.formg.get('email').touched; }
  get invaPassword() { return this.formg.get('password').status === 'INVALID' && this.formg.get('password').touched; }
}
