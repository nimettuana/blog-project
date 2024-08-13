import { Component} from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent{

  contactForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }



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

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // Send the form data to your server or API
    console.log(this.contactForm.value);
  }
}
