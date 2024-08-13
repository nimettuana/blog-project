import { Component, OnInit } from '@angular/core';

import {ChangeDetectionStrategy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {MatSnackBar} from '@angular/material/snack-bar';
import { RouterModule,RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';

import {signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {merge} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class LoginComponent  implements OnInit{





  url = 'https://example.com'; // replace with the URL you want to share
  title = 'Example Title'; // replace with the title you want to share

  shareOnFacebook(): string {
    return `https://www.facebook.com/sharer/sharer.php?u=${this.url}&title=${this.title}`;
  }

  shareOnTwitter(): string {
    return `https://twitter.com/intent/tweet?url=${this.url}&text=${this.title}`;
  }

  shareOnLinkedIn(): string {
    return `https://www.linkedin.com/shareArticle?mini=true&url=${this.url}&title=${this.title}`;
  }

  shareOnWhatsApp(): string {
    return `https://api.whatsapp.com/send?text=${this.title} ${this.url}`;
  }

   loginForm!: FormGroup;

  signInForm!: FormGroup;
  signUpForm!: FormGroup;


  username: string= '';
  password: string= '';
  error: string= '';

  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');

  // dataSource = new MatTableDataSource<any>([]);
  // pageSize = 10;
  // pageSizeOptions = [5, 10, 20];


  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient, public dialog: MatDialog, private _snackBar: MatSnackBar ) {

    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
  // ngOnInit(): void {
  //    // Initialize the paginator
  //    this.dataSource.paginator = this.paginator;

  // }
  onPageChange(event: any){
    console.log(event);
  }



  onLogin(): void {
    // Implement authentication logic here
    // For example, make a POST request to a backend API
    this.http.post('https://example.com/api/login', {
      username: this.username,
      password: this.password
    })
    .subscribe((response: any) => {
      // Handle successful login response
      console.log(response);
      // Redirect to a protected route or store the token
    }, (error: any) => {
      // Handle error response
      this.error = error.message;
    });
  }







createForms(): void {
  this.signInForm = new FormGroup({
    credentials: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  });

  this.signUpForm = new FormGroup({
    credentials: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  });

  
}

matchPasswordValidator(group: FormGroup) {
  const passwordControl = group.get('password');
  const confirmPasswordControl = group.get('confirmPassword');

  if (!passwordControl || !confirmPasswordControl) {
    return null; // or throw an error, depending on your requirements
  }

  const password = passwordControl.value;
  const confirmPassword = confirmPasswordControl.value;

  return password === confirmPassword ? null : { mismatch: true };


}



onSignIn(): void {
  console.log('Sign In form submitted:', this.signInForm.value);
}

onSignUp(): void {
  console.log('Sign Up form submitted:', this.signUpForm);


}

ngOnInit(): void {
  this.signInForm = new FormGroup({
    credentials: new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  });
}

onSubmit(): void {
  // Add your login logic here
  console.log(this.loginForm.value);
}
}



