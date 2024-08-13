import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base.service';
import { BlogDialogComponent } from './home/blog-dialog/blog-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';


import {MatExpansionModule} from '@angular/material/expansion';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { PopupComponent } from './home/popup/popup.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Routes } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { ContactComponent } from './home/contact/contact.component';









@NgModule({
  declarations: [AppComponent,HomeComponent, BlogDialogComponent, PopupComponent, LoginComponent, ContactComponent,],

  imports: [


    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatChipsModule,
    NgbRatingModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
   MatInputModule,
    FormsModule,
   MatSelectModule,
   MatTooltipModule,
   MatRippleModule,
   MatMenuModule,
   NgbPopoverModule,
   NgbDropdownModule,
   MatTabsModule,
   MatStepperModule,
   MatExpansionModule,
   MatDatepickerModule,
   MatCheckboxModule,
   NgbNavModule,
   MatSidenavModule,
   RouterModule,
   MatDividerModule,
   MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule

  ],
  providers: [BaseService],
  bootstrap: [AppComponent,LoginComponent],
})
export class AppModule {}

export const routes: Routes = [
  { path: 'home', component: HomeComponent },

]
