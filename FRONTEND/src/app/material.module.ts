import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
        MatSidenavModule,
        MatToolbarModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule
    ],

    exports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
        MatSidenavModule,
        MatToolbarModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule

    ]
})
export class MaterialModule {

}