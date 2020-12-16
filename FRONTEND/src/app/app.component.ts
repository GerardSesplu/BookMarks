import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookiesComponent } from './shared/dialog/cookies/cookies.component';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookmark';
  constructor(private storageService: StorageService, public dialog: MatDialog) { this.cookieTest() }

  cookieTest() {
    let aceptCookies: boolean = this.storageService.cookieAcept();

if (!aceptCookies) {
  const dialogRef = this.dialog.open(CookiesComponent);
  dialogRef.afterClosed().subscribe(result => {
    

      this.storageService.setCookieAcept(`${result}`);
  

  });
}

  }









}
